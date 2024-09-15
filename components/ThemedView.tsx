import { View, type ViewProps } from 'react-native';



export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedView({ style, lightColor, darkColor, ...otherProps }: ThemedViewProps) {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <View style={[style]} {...otherProps} />;
}
function useThemeColor(arg0: { light: string | undefined; dark: string | undefined; }, arg1: string) {
  throw new Error('Function not implemented.');
}

