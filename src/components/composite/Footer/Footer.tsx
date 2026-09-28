import { Container } from "@/components/ui/Container";
import { Text } from "@/components/ui/Text";
import { navItems } from "@/components/composite/Navbar";

const CURRENT_YEAR = new Date().getFullYear();
const linkColumns = [navItems.slice(0, 3), navItems.slice(3)];

export function Footer() {
  return (
    <footer className="bg-mm-navy-deep pt-10 pb-10">
      <Container>
        <div className="border-t border-white/10 pt-10">
          <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex flex-col gap-1.5">
              <Text size="sm" color="inverse-muted">
                © {CURRENT_YEAR} feito por{" "}
                <a
                  href="https://kyoristech.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[var(--text-color-inverse)] underline decoration-white/30 underline-offset-2 transition-colors duration-300 hover:decoration-white"
                >
                  Kyoris Tech
                </a>
              </Text>

              <Text size="sm" color="inverse-muted">
                Construindo experiências digitais com propósito
              </Text>

              <Text size="xs" color="inverse-muted" className="mt-2">
                Desenvolvido com Next.js
              </Text>
            </div>

            <div className="grid grid-cols-2 gap-x-12 gap-y-2">
              {linkColumns.map((column, columnIndex) => (
                <nav key={columnIndex} className="flex flex-col gap-2">
                  {column.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="text-sm text-[var(--text-color-inverse-muted)] transition-colors duration-300 hover:text-[var(--text-color-inverse)]"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
