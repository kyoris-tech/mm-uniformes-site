import {
  ComoFunciona,
  Contato,
  Diferenciais,
  Hero,
  Producao,
  Segmentos,
  Servicos,
} from "@/components/screens/home";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <Servicos />
      <Diferenciais />
      <Producao />
      <Segmentos />
      <ComoFunciona />
      <Contato />
    </main>
  );
}
