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

export const textfield = {
  colorTextPlaceholder : WHITE_TRANSPARENT,
  colorText : WHITE_LIGHT,
  colorIcon : WHITE_TRANSPARENT,
  colorIconHover : WHITE_LIGHT
}

export const checkbox = {
  colorText : WHITE_LIGHT
}

export const button = {
  defaultBg : TRANSPARENT,
  colorText : WHITE_LIGHT,
  defaultGhostBorderColor : TRANSPARENT,
  defaultGhostColor : TRANSPARENT,
  defaultHoverBorderColor : BLUE_LIGHT,
  defaultHoverColor : BLUE_LIGHT
}

export const combobox = {
  activeBorderColor : TRANSPARENT,
  activeOutlineCOlor : WHITE_LIGHT,
  clearBg: TRANSPARENT,
  selectorBg : TRANSPARENT,
  colorTextPlaceholder : WHITE_TRANSPARENT,
  optionSelectedColor : WHITE_LIGHT
}

export const localtimeTextfield = {
  colorTextPlaceholder: WHITE_TRANSPARENT,
  colorBgContainer : TRANSPARENT,
  cellActiveWithRangeBg : TRANSPARENT,
  colorFillTertiary: WHITE_LIGHT,
  colorFillSecondary : WHITE_LIGHT,
  colorIcon : WHITE_LIGHT,
  colorIconHover : WHITE_LIGHT
}