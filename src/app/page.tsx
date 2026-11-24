import {
  ComoFunciona,
  Contato,
  Diferenciais,
  Hero,
  Producao,
  Produtos,
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
      <Produtos />
      <ComoFunciona />
      <Contato />
    </main>
  );
}
