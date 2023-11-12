export type MonsterIconProps = React.SVGProps<SVGSVGElement> & { secondaryColor?: string }

export const DEFAULT_MONSTER_ICON_PROPS: MonsterIconProps = {
  height: '50px',
  width: '50px',
  color: 'white',
  secondaryColor: '#003E9D',
};

export type MonsterIconType = ({ height, width, color, secondaryColor, ...props }: MonsterIconProps) => JSX.Element;
