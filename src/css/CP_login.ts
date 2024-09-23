import { 
  BLUE_LIGHT,
  TRANSPARENT,
  WHITE_LIGHT, 
  WHITE_TRANSPARENT,
} from "./Colors.ts"

/*
Estos objetos son enviados al componente ConfigProvider en el login para cambiar 
estilos especificos, es posible de igual manera reutilizarlos en donde sea conveniente
 */

export const txf = {
  colorTextPlaceholder : WHITE_TRANSPARENT,
  colorText : WHITE_LIGHT,
  colorIcon : WHITE_TRANSPARENT,
  colorIconHover : WHITE_LIGHT
}

export const chx = {
  colorText : WHITE_LIGHT
}

export const btn = {
  defaultBg : TRANSPARENT,
  colorText : WHITE_LIGHT,
  defaultGhostBorderColor : TRANSPARENT,
  defaultGhostColor : TRANSPARENT,
  defaultHoverBorderColor : BLUE_LIGHT,
  defaultHoverColor : BLUE_LIGHT
}
