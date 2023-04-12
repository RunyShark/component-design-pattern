export interface NavbarProp {
  id: number;
  name: string;
  href: string;
  active: boolean;
}

export interface NavbarHandlers {
  // browse: (id: string) => void;
  restart: () => void;
}
