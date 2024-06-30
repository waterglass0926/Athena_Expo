/* eslint-disable */
import type { ReactNode } from 'react';
import type { TextProps, GestureResponderEvent } from 'react-native';

export namespace ExpoRouter {
  type StaticRoutes = `/` | `/_sitemap` | `/assets/data/ubereats/categories` | `/assets/data/ubereats/foods` | `/assets/data/ubereats/meals` | `/assets/data/ubereats/restaurants` | `/components` | `/components/__tests__/ThemedText-test` | `/components/athena` | `/components/athena/Collapsible` | `/components/athena/ExternalLink` | `/components/athena/HelloWave` | `/components/athena/Loading` | `/components/athena/ParallaxScrollView` | `/components/athena/TabBarIcon` | `/components/athena/ThemedText` | `/components/athena/ThemedView` | `/components/chatgpt/version1.0` | `/components/chatgpt/version1.0/Button` | `/components/chatgpt/version1.0/Input` | `/components/chatgpt/version1.0/Page` | `/components/tiktok` | `/components/tiktok/Feed` | `/components/translator` | `/components/translator/ButtonBase` | `/components/translator/ButtonBorderLess` | `/components/translator/InputBase` | `/components/translator/TypoGraphy` | `/components/ubereats/forms` | `/components/ubereats/forms/AppErrorMessage` | `/components/ubereats/forms/AppForm` | `/components/ubereats/forms/AppFormFeilds` | `/components/ubereats/forms/AppSubmitButton` | `/components/ubereats/forms/ImageInput` | `/components/ubereats/others` | `/components/ubereats/others/About` | `/components/ubereats/others/AppButton` | `/components/ubereats/others/AppHead` | `/components/ubereats/others/CartItems` | `/components/ubereats/others/Categories` | `/components/ubereats/others/CheckoutModal` | `/components/ubereats/others/HeaderTabs` | `/components/ubereats/others/MenuItems` | `/components/ubereats/others/OtherSignin` | `/components/ubereats/others/PaymentButton` | `/components/ubereats/others/PaymentScreen` | `/components/ubereats/others/RestaurantItem` | `/components/ubereats/others/RestaurantMap` | `/components/ubereats/others/Screen` | `/components/ubereats/others/SearchBar` | `/components/ubereats/others/TabCartButton` | `/components/ubereats/others/ViewCart` | `/constants` | `/constants/colors` | `/constants/data` | `/constants/fonts` | `/constants/icons` | `/constants/images` | `/constants/styles` | `/constants/svgs` | `/constants/urls` | `/contexts/translator/CardSequenceContext` | `/contexts/translator/HistoryContext` | `/contexts/translator/TranslateContext` | `/hooks/translator/useKeyboard` | `/hooks/translator/useNavigation` | `/hooks/translator/useRoute` | `/routes` | `/routes/drawers/athena` | `/routes/drawers/translator/home` | `/routes/stacks/athena` | `/routes/stacks/chatgpt/version1.0` | `/routes/stacks/chatgpt/version1.0/auth` | `/routes/stacks/chatgpt/version1.0/home` | `/routes/stacks/tiktok` | `/routes/stacks/tiktok/discover` | `/routes/stacks/tiktok/home` | `/routes/stacks/tiktok/inbox` | `/routes/stacks/tiktok/profile` | `/routes/stacks/translator` | `/routes/stacks/translator/home` | `/routes/stacks/ubereats` | `/routes/stacks/ubereats/auth` | `/routes/stacks/ubereats/home` | `/routes/tabs/athena` | `/routes/tabs/chatgpt/version1.0/bottom` | `/routes/tabs/tiktok/bottom` | `/routes/tabs/ubereats/bottom` | `/screens/athena` | `/screens/athena/Language` | `/screens/athena/Slides` | `/screens/athena/Theme` | `/screens/chatgpt/version1.0` | `/screens/chatgpt/version1.0/auth/SignIn` | `/screens/chatgpt/version1.0/auth/SignUp` | `/screens/chatgpt/version1.0/auth/Welcome` | `/screens/chatgpt/version1.0/main/Chat` | `/screens/chatgpt/version1.0/main/Home` | `/screens/chatgpt/version1.0/main/Profile` | `/screens/chatgpt/version1.0/main/Saved` | `/screens/tiktok` | `/screens/tiktok/discover` | `/screens/tiktok/home` | `/screens/tiktok/home/feed` | `/screens/tiktok/inbox` | `/screens/tiktok/profile` | `/screens/tiktok/splash` | `/screens/translator` | `/screens/translator/card-sequence` | `/screens/translator/card-sequence/Header` | `/screens/translator/card-sequence/TranslatorCard` | `/screens/translator/credit` | `/screens/translator/full` | `/screens/translator/history` | `/screens/translator/history/Header` | `/screens/translator/history/HistoryCard` | `/screens/translator/home` | `/screens/translator/home/DrawerContent` | `/screens/translator/home/Header` | `/screens/translator/home/Input` | `/screens/translator/home/LanguageSelector` | `/screens/translator/home/RecentCard` | `/screens/translator/home/TranslatedCard` | `/screens/translator/oss` | `/screens/translator/oss/Card` | `/screens/translator/oss/Header` | `/screens/ubereats` | `/screens/ubereats/auth/SignIn` | `/screens/ubereats/auth/SignUp` | `/screens/ubereats/auth/Welcome` | `/screens/ubereats/main/Account` | `/screens/ubereats/main/Browser` | `/screens/ubereats/main/Cart` | `/screens/ubereats/main/Checkout` | `/screens/ubereats/main/Details` | `/screens/ubereats/main/Grocery` | `/screens/ubereats/main/Home` | `/screens/ubereats/main/Success` | `/services/apis/athena/auth` | `/stores` | `/stores/athena` | `/stores/ubereats/auth` | `/stores/ubereats/basket` | `/styles/tiktok` | `/styles/tiktok/discover` | `/styles/tiktok/feed` | `/styles/tiktok/home` | `/styles/tiktok/inbox` | `/styles/tiktok/profile` | `/types/athena` | `/types/translator` | `/types/translator/declarations.d` | `/utils` | `/utils/firebase` | `/utils/http` | `/utils/i18n` | `/utils/translate`;
  type DynamicRoutes<T extends string> = never;
  type DynamicRouteTemplate = never;

  export type RelativePathString = `./${string}` | `../${string}` | '..';
  export type AbsoluteRoute = DynamicRouteTemplate | StaticRoutes;
  export type ExternalPathString = `${string}:${string}`;
  export type ExpoRouterRoutes = DynamicRouteTemplate | StaticRoutes | RelativePathString;
  export type AllRoutes = ExpoRouterRoutes | ExternalPathString;

  /****************
   * Route Utils  *
   ****************/
  type SearchOrHash = `?${string}` | `#${string}`;
  export type UnknownInputParams = Record<
    string,
    string | number | undefined | null | (string | number)[]
  >;
  type UnknownOutputParams = Record<string, string | string[]>;

  /**
   * Return only the RoutePart of a string. If the string has multiple parts return never
   *
   * string   | type
   * ---------|------
   * 123      | 123
   * /123/abc | never
   * 123?abc  | never
   * ./123    | never
   * /123     | never
   * 123/../  | never
   */
  type SingleRoutePart<S extends string> = S extends `${string}/${string}`
    ? never
    : S extends `${string}${SearchOrHash}`
    ? never
    : S extends ''
    ? never
    : S extends `(${string})`
    ? never
    : S extends `[${string}]`
    ? never
    : S;

  /**
   * Return only the CatchAll router part. If the string has search parameters or a hash return never
   */
  type CatchAllRoutePart<S extends string> = S extends `${string}${SearchOrHash}`
    ? never
    : S extends ''
    ? never
    : S extends `${string}(${string})${string}`
    ? never
    : S extends `${string}[${string}]${string}`
    ? never
    : S;

  /**
   * Return the name of a route parameter
   * '[test]'    -> 'test'
   * 'test'      -> never
   * '[...test]' -> '...test'
   */
  type IsParameter<Part> = Part extends `[${infer ParamName}]` ? ParamName : never;

  /**
   * Return a union of all raw parameter names. If there are no names return never
   *
   * This differs from ParameterNames as it returns the `...` for catch all parameters
   *
   * /[test]         -> 'test'
   * /[abc]/[...def] -> 'abc'|'...def'
   */
  type ParameterNames<Path> = Path extends `${infer PartA}/${infer PartB}`
    ? IsParameter<PartA> | ParameterNames<PartB>
    : IsParameter<Path>;

  /**
   * Returns all segments of a route.
   *
   * /(group)/123/abc/[id]/[...rest] -> ['(group)', '123', 'abc', '[id]', '[...rest]'
   */
  type RouteSegments<Path> = Path extends `${infer PartA}/${infer PartB}`
    ? PartA extends '' | '.'
    ? [...RouteSegments<PartB>]
    : [PartA, ...RouteSegments<PartB>]
    : Path extends ''
    ? []
    : [Path];

  type AllUngroupedRoutes<Path> = Path extends `(${infer PartA})/${infer PartB}`
    ? `(${PartA})/${AllUngroupedRoutes<PartB>}` | AllUngroupedRoutes<PartB>
    : Path;

  /**
   * Returns a Record of the routes parameters as strings and CatchAll parameters
   *
   * There are two versions, input and output, as you can input 'string | number' but
   *  the output will always be 'string'
   *
   * /[id]/[...rest] -> { id: string, rest: string[] }
   * /no-params      -> {}
   */
  export type InputRouteParams<Path> = {
    [Key in ParameterNames<Path> as Key extends `...${infer Name}`
    ? Name
    : Key]: Key extends `...${string}` ? (string | number)[] : string | number;
  } & UnknownInputParams;

  type OutputRouteParams<Path> = {
    [Key in ParameterNames<Path> as Key extends `...${infer Name}`
    ? Name
    : Key]: Key extends `...${string}` ? string[] : string;
  } & UnknownOutputParams;

  /**
   * Returns the search parameters for a route.
   */
  export type SearchParams<T extends AllRoutes = never> = T extends DynamicRouteTemplate
    ? OutputRouteParams<T>
    : T extends StaticRoutes
    ? never
    : UnknownOutputParams;

  /*********
   * Href  *
   *********/

  /**
   * The main routing type for Expo Router. Includes all available routes with strongly typed parameters.
   *
   * Allows for static routes, relative paths, external paths, dynamic routes, and the dynamic route provided as a static string
   */
  export type Href =
    | StringRouteToType<AllUngroupedRoutes<StaticRoutes> | RelativePathString | ExternalPathString>
    | DynamicRouteTemplateToString<DynamicRouteTemplate>
    | DynamicRouteObject<
      StaticRoutes | RelativePathString | ExternalPathString | DynamicRouteTemplate
    >;

  type StringRouteToType<T extends string> =
    | T
    | `${T}${SearchOrHash}`
    | { pathname: T; params?: UnknownInputParams | never };

  type DynamicRouteTemplateToString<Path> = Path extends `${infer PartA}/${infer PartB}`
    ? `${PartA extends `[${string}]` ? string : PartA}/${DynamicRouteTemplateToString<PartB>}`
    : Path extends `[${string}]`
    ? string
    : Path;

  type DynamicRouteObject<T> = T extends DynamicRouteTemplate
    ? {
      pathname: T;
      params: InputRouteParams<T>;
    }
    : never;

  type IsStaticRoute<T> =
    | StaticRoutes
    | RelativePathString
    | ExternalPathString
    | (T extends DynamicRoutes<infer _> ? T : never);

  /***********************
   * Expo Router Exports *
   ***********************/

  export type Router = {
    /** Go back in the history. */
    back: () => void;
    /** If there's history that supports invoking the `back` function. */
    canGoBack: () => boolean;
    /** Navigate to the provided href using a push operation if possible. */
    push: (href: Href) => void;
    /** Navigate to the provided href. */
    navigate: (href: Href) => void;
    /** Navigate to route without appending to the history. */
    replace: (href: Href) => void;
    /** Navigate to a screen with a stack lower than the current screen. Using the provided count if possible, otherwise 1. */
    dismiss: (count?: number) => void;
    /** Navigate to first screen within the lowest stack. */
    dismissAll: () => void;
    /** If there's history that supports invoking the `dismiss` and `dismissAll` function. */
    canDismiss: () => boolean;
    /** Update the current route query params. */
    setParams: <T = ''>(
      params?: T extends '' ? Record<string, string | undefined | null> : InputRouteParams<T>
    ) => void;
  };

  /** The imperative router. */
  export declare const router: Router;

  /************
   * <Link /> *
   ************/
  export interface WebAnchorProps {
    /**
     * **Web only:** Specifies where to open the `href`.
     *
     * - **_self**: the current tab.
     * - **_blank**: opens in a new tab or window.
     * - **_parent**: opens in the parent browsing context. If no parent, defaults to **_self**.
     * - **_top**: opens in the highest browsing context ancestor. If no ancestors, defaults to **_self**.
     *
     * This property is passed to the underlying anchor (`<a>`) tag.
     *
     * @default '_self'
     *
     * @example
     * <Link href="https://expo.dev" target="_blank">Go to Expo in new tab</Link>
     */
    target?: '_self' | '_blank' | '_parent' | '_top' | (string & object);

    /**
     * **Web only:** Specifies the relationship between the `href` and the current route.
     *
     * Common values:
     * - **nofollow**: Indicates to search engines that they should not follow the `href`. This is often used for user-generated content or links that should not influence search engine rankings.
     * - **noopener**: Suggests that the `href` should not have access to the opening window's `window.opener` object, which is a security measure to prevent potentially harmful behavior in cases of links that open new tabs or windows.
     * - **noreferrer**: Requests that the browser not send the `Referer` HTTP header when navigating to the `href`. This can enhance user privacy.
     *
     * The `rel` property is primarily used for informational and instructive purposes, helping browsers and web
     * crawlers make better decisions about how to handle and interpret the links on a web page. It is important
     * to use appropriate `rel` values to ensure that links behave as intended and adhere to best practices for web
     * development and SEO (Search Engine Optimization).
     *
     * This property is passed to the underlying anchor (`<a>`) tag.
     *
     * @example
     * <Link href="https://expo.dev" rel="nofollow">Go to Expo</Link>
     */
    rel?: string;

    /**
     * **Web only:** Specifies that the `href` should be downloaded when the user clicks on the link,
     * instead of navigating to it. It is typically used for links that point to files that the user should download,
     * such as PDFs, images, documents, etc.
     *
     * The value of the `download` property, which represents the filename for the downloaded file.
     * This property is passed to the underlying anchor (`<a>`) tag.
     *
     * @example
     * <Link href="/image.jpg" download="my-image.jpg">Download image</Link>
     */
    download?: string;
  }

  export interface LinkProps<T = string> extends Omit<TextProps, 'href'>, WebAnchorProps {
    /** Path to route to. */
    href: Href;

    // TODO(EvanBacon): This may need to be extracted for React Native style support.
    /** Forward props to child component. Useful for custom buttons. */
    asChild?: boolean;

    /** Should replace the current route without adding to the history. */
    replace?: boolean;
    /** Should push the current route  */
    push?: boolean;

    /** On web, this sets the HTML `class` directly. On native, this can be used with CSS interop tools like Nativewind. */
    className?: string;

    onPress?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent> | GestureResponderEvent) => void;
  }

  export interface LinkComponent {
    (props: React.PropsWithChildren<LinkProps>): JSX.Element;
    /** Helper method to resolve an Href object into a string. */
    resolveHref: (href: Href) => string;
  }

  /**
   * Component to render link to another route using a path.
   * Uses an anchor tag on the web.
   *
   * @param props.href Absolute path to route (e.g. \`/feeds/hot\`).
   * @param props.replace Should replace the current route without adding to the history.
   * @param props.asChild Forward props to child component. Useful for custom buttons.
   * @param props.children Child elements to render the content.
   * @param props.className On web, this sets the HTML \`class\` directly. On native, this can be used with CSS interop tools like Nativewind.
   */
  export declare const Link: LinkComponent;

  /** Redirects to the href as soon as the component is mounted. */
  export declare const Redirect: (props: React.PropsWithChildren<{ href: Href }>) => ReactNode;
  export type Redirect = typeof Redirect;

  /**
   * Hooks
   */

  export declare function useRouter(): Router;
  type useRouter = typeof useRouter;

  /**
   * Returns the URL search parameters for the contextually focused route. e.g. \`/acme?foo=bar\` -> \`{ foo: "bar" }\`.
   * This is useful for stacks where you may push a new screen that changes the query parameters.
   *
   * To observe updates even when the invoking route is not focused, use \`useGlobalSearchParams()\`.
   * @see \`useGlobalSearchParams\`
   */
  export declare function useLocalSearchParams<
    TParams extends AllRoutes | UnknownOutputParams = UnknownOutputParams,
  >(): TParams extends AllRoutes ? SearchParams<TParams> : TParams;
  type useLocalSearchParams = typeof useLocalSearchParams;

  export declare function useSearchParams<
    TParams extends AllRoutes | UnknownOutputParams = UnknownOutputParams,
  >(): TParams extends AllRoutes ? SearchParams<TParams> : TParams;
  type useSearchParams = typeof useSearchParams;

  /**
   * Get the globally selected query parameters, including dynamic path segments. This function will update even when the route is not focused.
   * Useful for analytics or other background operations that don't draw to the screen.
   *
   * When querying search params in a stack, opt-towards using \`useLocalSearchParams\` as these will only
   * update when the route is focused.
   *
   * @see \`useLocalSearchParams\`
   */
  export declare function useGlobalSearchParams<
    T extends AllRoutes | UnknownOutputParams = UnknownOutputParams,
  >(): T extends AllRoutes ? SearchParams<T> : T;
  type useGlobalSearchParams = typeof useGlobalSearchParams;

  /**
   * Get a list of selected file segments for the currently selected route. Segments are not normalized, so they will be the same as the file path. e.g. /[id]?id=normal -> ["[id]"]
   *
   * \`useSegments\` can be typed using an abstract.
   * Consider the following file structure, and strictly typed \`useSegments\` function:
   *
   * \`\`\`md
   * - app
   *   - [user]
   *     - index.js
   *     - followers.js
   *   - settings.js
   * \`\`\`
   * This can be strictly typed using the following abstract:
   *
   * \`\`\`ts
   * const [first, second] = useSegments<['settings'] | ['[user]'] | ['[user]', 'followers']>()
   * \`\`\`
   */
  export declare function useSegments<
    T extends AbsoluteRoute | RouteSegments<AbsoluteRoute> | RelativePathString,
  >(): T extends AbsoluteRoute ? RouteSegments<T> : T extends string ? string[] : T;
  type useSegments = typeof useSegments;
}
