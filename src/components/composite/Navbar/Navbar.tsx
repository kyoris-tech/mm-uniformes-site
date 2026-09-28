"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon, CloseIcon, MenuIcon } from "@/components/ui/icons";
import { cn } from "@/lib/cn";
import { navItems } from "./nav-items";

interface IndicatorStyle {
  left: number;
  width: number;
}

// Tempo máximo que uma rolagem suave programática (clique no menu) pode
// levar antes de liberarmos o "scroll spy" de novo — funciona como rede de
// segurança para navegadores sem suporte ao evento "scrollend" (ex.: Safari).
const PROGRAMMATIC_SCROLL_FALLBACK_MS = 900;

export function Navbar() {
  const [activeId, setActiveId] = useState(navItems[0].id);
  const [indicator, setIndicator] = useState<IndicatorStyle | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef(new Map<string, HTMLAnchorElement>());
  // Enquanto o clique no menu está rolando a página programaticamente,
  // ignoramos o "scroll spy": sem isso, as seções que passam pela tela
  // durante a rolagem suave disputam com o clique por setActiveId, fazendo
  // a pílula "voltar e ir" e forçando recálculos de layout no meio da
  // animação (o que dava a impressão de travamento ao navegar).
  const isProgrammaticScrollRef = useRef(false);
  const programmaticScrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const updateIndicator = useCallback(() => {
    const list = listRef.current;
    const activeItem = itemRefs.current.get(activeId);

    if (!list || !activeItem) return;

    const listBounds = list.getBoundingClientRect();
    const itemBounds = activeItem.getBoundingClientRect();

    setIndicator({
      left: itemBounds.left - listBounds.left,
      width: itemBounds.width,
    });
  }, [activeId]);

  useEffect(() => {
    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [updateIndicator]);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));

    const ANCHOR_OFFSET_PX = 120;
    let ticking = false;

    function updateActiveSection() {
      ticking = false;
      if (isProgrammaticScrollRef.current) return;

      let current = sections[0]?.id;

      for (const section of sections) {
        if (section.getBoundingClientRect().top <= ANCHOR_OFFSET_PX) {
          current = section.id;
        }
      }

      if (current) setActiveId(current);
    }

    function handleScroll() {
      if (isProgrammaticScrollRef.current || ticking) return;
      ticking = true;
      setTimeout(updateActiveSection, 100);
    }

    function handleScrollEnd() {
      isProgrammaticScrollRef.current = false;
    }

    updateActiveSection();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    window.addEventListener("scrollend", handleScrollEnd);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      window.removeEventListener("scrollend", handleScrollEnd);
    };
  }, []);

  useEffect(() => {
    return () => {
      if (programmaticScrollTimeoutRef.current) {
        clearTimeout(programmaticScrollTimeoutRef.current);
      }
    };
  }, []);

  function handleNavigate(event: React.MouseEvent<HTMLAnchorElement>, id: string) {
    event.preventDefault();

    isProgrammaticScrollRef.current = true;
    if (programmaticScrollTimeoutRef.current) {
      clearTimeout(programmaticScrollTimeoutRef.current);
    }
    programmaticScrollTimeoutRef.current = setTimeout(() => {
      isProgrammaticScrollRef.current = false;
    }, PROGRAMMATIC_SCROLL_FALLBACK_MS);

    setActiveId(id);
    setIsMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <header className="fixed inset-x-0 top-6 z-50 flex justify-center px-4">
      <div className="flex flex-col items-center">
        {/* bg-white/95 já é quase opaco, então o backdrop-blur não muda o visual
            de forma perceptível — mas, num header fixed que fica sobre fotos
            grandes durante toda a rolagem, ele força o navegador a recalcular
            o desfoque do conteúdo atrás a cada frame. Removido para eliminar
            esse custo de composição e deixar o scroll mais fluido. */}
        <div className="flex items-center gap-6 rounded-full border border-white/40 bg-white/95 py-2 pl-3 pr-2 shadow-lg shadow-neutral-900/10 sm:pl-4">
          <a
            href="#home"
            onClick={(event) => handleNavigate(event, "home")}
            className="flex items-center"
          >
            <Image
              src="/images/logo.jpg"
              alt="MM Uniformes"
              width={210}
              height={94}
              className="h-12 w-auto"
              priority
            />
          </a>

          <nav ref={listRef} className="relative hidden items-center gap-1 lg:flex">
            {indicator && (
              <span
                aria-hidden
                className="absolute inset-y-0 rounded-full bg-primary transition-all duration-300 ease-out"
                style={{ left: indicator.left, width: indicator.width }}
              />
            )}

            {navItems.map((item) => (
              <a
                key={item.id}
                ref={(element) => {
                  if (element) itemRefs.current.set(item.id, element);
                }}
                href={`#${item.id}`}
                onClick={(event) => handleNavigate(event, item.id)}
                className={cn(
                  "relative z-10 rounded-full px-4 py-1.5 text-sm font-medium whitespace-nowrap transition-colors duration-300",
                  activeId === item.id ? "text-white" : "text-neutral-600 hover:text-primary",
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex">
            <Button as="a" href="#contato" variant="primary" size="sm" animated={false}>
              Fale Conosco
              <ArrowRightIcon className="h-3.5 w-3.5" />
            </Button>
          </div>

          <button
            type="button"
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((current) => !current)}
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full text-primary transition-colors duration-300 lg:hidden"
          >
            {isMobileMenuOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>

        <div
          className={cn(
            "w-64 overflow-hidden transition-all duration-300 ease-out lg:hidden",
            isMobileMenuOpen ? "mt-3 max-h-96 opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <div className="flex flex-col gap-1 rounded-3xl border border-white/40 bg-white/95 p-3 shadow-lg shadow-neutral-900/10">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(event) => handleNavigate(event, item.id)}
                className={cn(
                  "rounded-2xl px-4 py-2.5 text-sm font-medium transition-colors duration-300",
                  activeId === item.id
                    ? "bg-primary text-white"
                    : "text-neutral-600 hover:bg-primary/5 hover:text-primary",
                )}
              >
                {item.label}
              </a>
            ))}

            <div className="mt-2 border-t border-neutral-200/60 pt-3">
              <Button
                as="a"
                href="#contato"
                variant="primary"
                size="sm"
                animated={false}
                className="w-full"
              >
                Fale Conosco
                <ArrowRightIcon className="h-3.5 w-3.5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
