declare namespace JSX {
  interface IntrinsicElements {
    'vturb-smartplayer': VturbSmartplayerProps;
  }
}

interface VturbSmartplayerProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  id?: string;
  style?: React.CSSProperties;
}
