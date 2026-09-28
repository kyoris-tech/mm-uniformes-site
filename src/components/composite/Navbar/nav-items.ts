export interface NavItem {
  id: string;
  label: string;
}

export const navItems: NavItem[] = [
  { id: "home", label: "Início" },
  { id: "servicos", label: "Serviços" },
  { id: "diferenciais", label: "Diferenciais" },
  { id: "producao", label: "Produção" },
  { id: "como-funciona", label: "Como funciona" },
  { id: "contato", label: "Contato" },
];
