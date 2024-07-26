/**
 * @description default props for components. Extend this to add your own props
 * @param className string
 * @param id string
 */
export interface DefaultComponentProps {
  className?: string;
  id?: string;
}

/**
 * @description default props for components with optional children. Extend this to add your own props
 * @param className string
 * @param id string
 * @param children JSX.Element | JSX.Element[]
 */
export interface PropsWithChildren extends DefaultComponentProps {
  children?: JSX.Element | JSX.Element[];
}

/**
 * @description default props for components with children. Extend this to add your own props
 * @param className string
 * @param id string
 * @param children JSX.Element | JSX.Element[]
 */
export interface PropsWithChildrenRequired extends DefaultComponentProps {
  children: JSX.Element | JSX.Element[];
}
