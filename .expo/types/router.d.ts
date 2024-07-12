/* eslint-disable */
import type { ReactNode } from 'react';
import type { TextProps, GestureResponderEvent } from 'react-native';

export namespace ExpoRouter {
  type StaticRoutes = `/` | `/_sitemap` | `/assets/data/disney/v1` | `/assets/data/fitness/v1/populars` | `/assets/data/fitness/v1/traniers` | `/assets/data/paper/cards` | `/assets/data/tinder/v1/demo` | `/assets/data/ubereats/categories` | `/assets/data/ubereats/foods` | `/assets/data/ubereats/meals` | `/assets/data/ubereats/restaurants` | `/assets/svgs/disney/v1/Svg.ArrowLeft` | `/assets/svgs/disney/v1/Svg.ArrowRight` | `/assets/svgs/disney/v1/Svg.Background` | `/assets/svgs/disney/v1/Svg.CategoryBackground` | `/assets/svgs/disney/v1/Svg.DisneyPlusLogo` | `/assets/svgs/disney/v1/Svg.Downloads` | `/assets/svgs/disney/v1/Svg.Edit` | `/assets/svgs/disney/v1/Svg.Home` | `/assets/svgs/disney/v1/Svg.Plus` | `/assets/svgs/disney/v1/Svg.Search` | `/assets/svgs/disney/v1/Svg.Trash` | `/components` | `/components/athena` | `/components/athena/Button` | `/components/athena/Header` | `/components/athena/Input` | `/components/athena/Loading` | `/components/athena/Rating` | `/components/athena/Title` | `/components/athena/UserData` | `/components/athena/UserInfo` | `/components/basketball` | `/components/basketball/Ball` | `/components/basketball/Emoji` | `/components/basketball/Floor` | `/components/basketball/Hoop` | `/components/basketball/Net` | `/components/basketball/Score` | `/components/chatgpt/v1` | `/components/chatgpt/v1/Button` | `/components/chatgpt/v1/Input` | `/components/chatgpt/v1/Page` | `/components/disney/v1` | `/components/disney/v1/Categories` | `/components/disney/v1/Header` | `/components/disney/v1/HeaderAccounts` | `/components/disney/v1/HeaderManage` | `/components/disney/v1/ImageSlide` | `/components/disney/v1/MediaItemScroller` | `/components/disney/v1/SlideShow` | `/components/disney/v1/TouchLineItem` | `/components/disney/v1/TouchLineItemApp` | `/components/disney/v1/TouchLineItemElement` | `/components/fitness/v1` | `/components/fitness/v1/Category` | `/components/fitness/v1/Popular` | `/components/fitness/v1/Status` | `/components/fitness/v1/Trainer` | `/components/fitness/v1/Workout` | `/components/instagram/v1` | `/components/instagram/v1/BottomTabView` | `/components/instagram/v1/EditProfile` | `/components/instagram/v1/FriendProfile` | `/components/instagram/v1/Post` | `/components/instagram/v1/ProfileBody` | `/components/instagram/v1/Reels` | `/components/instagram/v1/SearchBox` | `/components/instagram/v1/SearchContent` | `/components/instagram/v1/SingleReel` | `/components/instagram/v1/Status` | `/components/instagram/v1/Stories` | `/components/instagram/v2` | `/components/instagram/v2/DoubleTap` | `/components/instagram/v2/Header` | `/components/instagram/v2/ProgressiveImage` | `/components/paper` | `/components/paper/BottomBar` | `/components/paper/Button` | `/components/paper/Cards/Evidence` | `/components/paper/Cards/Ghost` | `/components/paper/Cards/Introduction` | `/components/paper/Cards/Settings` | `/components/paper/Cards/Timer` | `/components/paper/Cards/Tool` | `/components/paper/Picker` | `/components/tiktok/v1` | `/components/tiktok/v1/Feed` | `/components/tiktok/v2` | `/components/tiktok/v2/AuthDetails` | `/components/tiktok/v2/AuthMenu` | `/components/tiktok/v2/ChatListItem` | `/components/tiktok/v2/ChatSingleItem` | `/components/tiktok/v2/CommentItem` | `/components/tiktok/v2/CommentModal` | `/components/tiktok/v2/Modal` | `/components/tiktok/v2/NavBarGeneral` | `/components/tiktok/v2/PostSingle` | `/components/tiktok/v2/PostSingleOverlay` | `/components/tiktok/v2/ProfileHeader` | `/components/tiktok/v2/ProfileNavBar` | `/components/tiktok/v2/ProfilePostList` | `/components/tiktok/v2/ProfilePostListItem` | `/components/tiktok/v2/SearchUserItem` | `/components/tinder/v1` | `/components/tinder/v1/CardItem` | `/components/tinder/v1/City` | `/components/tinder/v1/Filter` | `/components/tinder/v1/Icon` | `/components/tinder/v1/Message` | `/components/tinder/v1/ProfileItem` | `/components/translator` | `/components/translator/ButtonBase` | `/components/translator/ButtonBorderLess` | `/components/translator/InputBase` | `/components/translator/TypoGraphy` | `/components/ubereats/forms` | `/components/ubereats/forms/AppErrorMessage` | `/components/ubereats/forms/AppForm` | `/components/ubereats/forms/AppFormFeilds` | `/components/ubereats/forms/AppSubmitButton` | `/components/ubereats/forms/ImageInput` | `/components/ubereats/others` | `/components/ubereats/others/About` | `/components/ubereats/others/AppButton` | `/components/ubereats/others/AppHead` | `/components/ubereats/others/CartItems` | `/components/ubereats/others/Categories` | `/components/ubereats/others/CheckoutModal` | `/components/ubereats/others/HeaderTabs` | `/components/ubereats/others/MenuItems` | `/components/ubereats/others/OtherSignin` | `/components/ubereats/others/PaymentButton` | `/components/ubereats/others/PaymentScreen` | `/components/ubereats/others/RestaurantItem` | `/components/ubereats/others/RestaurantMap` | `/components/ubereats/others/Screen` | `/components/ubereats/others/SearchBar` | `/components/ubereats/others/TabCartButton` | `/components/ubereats/others/ViewCart` | `/components/world` | `/components/world/Capital` | `/components/world/Continent` | `/components/world/Country` | `/components/world/Friends` | `/components/world/Post` | `/components/youtube/v1` | `/components/youtube/v1/Buttons` | `/components/youtube/v1/Explore` | `/components/youtube/v1/Navbar` | `/components/youtube/v1/Posts` | `/components/youtube/v1/Sidebar` | `/constants` | `/constants/colors` | `/constants/data` | `/constants/fonts` | `/constants/icons` | `/constants/images` | `/constants/styles` | `/constants/svgs` | `/constants/urls` | `/contexts/translator/CardSequenceContext` | `/contexts/translator/HistoryContext` | `/contexts/translator/TranslateContext` | `/hooks/instagram/v2/useKeyboard` | `/hooks/tiktok/v2/queryKeys` | `/hooks/tiktok/v2/useChats` | `/hooks/tiktok/v2/useFollowing` | `/hooks/tiktok/v2/useFollowingMutation` | `/hooks/tiktok/v2/useMaterialNavBarHeight` | `/hooks/tiktok/v2/useMessages` | `/hooks/tiktok/v2/useUser` | `/hooks/translator/useKeyboard` | `/hooks/translator/useNavigation` | `/hooks/translator/useRoute` | `/routes` | `/routes/drawers/athena` | `/routes/drawers/translator/home` | `/routes/drawers/world/main` | `/routes/stacks/athena` | `/routes/stacks/basketball` | `/routes/stacks/chatgpt/v1` | `/routes/stacks/chatgpt/v1/auth` | `/routes/stacks/chatgpt/v1/home` | `/routes/stacks/disney/v1` | `/routes/stacks/disney/v1/downloads` | `/routes/stacks/disney/v1/home` | `/routes/stacks/disney/v1/main` | `/routes/stacks/disney/v1/profile` | `/routes/stacks/disney/v1/search` | `/routes/stacks/famous` | `/routes/stacks/fitness/v1` | `/routes/stacks/fitness/v1/auth` | `/routes/stacks/fitness/v1/home` | `/routes/stacks/instagram/v1` | `/routes/stacks/instagram/v1/main` | `/routes/stacks/instagram/v2` | `/routes/stacks/instagram/v2/explore` | `/routes/stacks/paper` | `/routes/stacks/tiktok/v1` | `/routes/stacks/tiktok/v1/discover` | `/routes/stacks/tiktok/v1/home` | `/routes/stacks/tiktok/v1/inbox` | `/routes/stacks/tiktok/v1/profile` | `/routes/stacks/tiktok/v2` | `/routes/stacks/tiktok/v2/feed` | `/routes/stacks/tiktok/v2/main` | `/routes/stacks/tinder/v1` | `/routes/stacks/tinder/v2` | `/routes/stacks/translator` | `/routes/stacks/translator/home` | `/routes/stacks/ubereats` | `/routes/stacks/ubereats/auth` | `/routes/stacks/ubereats/home` | `/routes/stacks/world` | `/routes/stacks/world/auth` | `/routes/stacks/world/feed` | `/routes/stacks/world/home` | `/routes/stacks/world/profile` | `/routes/stacks/youtube/v1` | `/routes/tabs/athena` | `/routes/tabs/chatgpt/v1/bottom` | `/routes/tabs/disney/v1/bottom` | `/routes/tabs/fitness/v1/bottom` | `/routes/tabs/instagram/v1/bottom` | `/routes/tabs/instagram/v2/bottom` | `/routes/tabs/tiktok/v1/bottom` | `/routes/tabs/tiktok/v2/bottom` | `/routes/tabs/tinder/v1/bottom` | `/routes/tabs/ubereats/bottom` | `/routes/tabs/world/bottom` | `/screens/athena` | `/screens/athena/Language` | `/screens/athena/Slides` | `/screens/athena/Theme` | `/screens/basketball` | `/screens/basketball/Home` | `/screens/basketball/Splash` | `/screens/chatgpt/v1` | `/screens/chatgpt/v1/auth/SignIn` | `/screens/chatgpt/v1/auth/SignUp` | `/screens/chatgpt/v1/auth/Welcome` | `/screens/chatgpt/v1/main/Chat` | `/screens/chatgpt/v1/main/Home` | `/screens/chatgpt/v1/main/Profile` | `/screens/chatgpt/v1/main/Saved` | `/screens/disney/v1` | `/screens/disney/v1/Downloads` | `/screens/disney/v1/Home` | `/screens/disney/v1/ModalAddProfile` | `/screens/disney/v1/ModalManageProfiles` | `/screens/disney/v1/ModalVideo` | `/screens/disney/v1/ModalWebView` | `/screens/disney/v1/Profile` | `/screens/disney/v1/ProfileAppSettings` | `/screens/disney/v1/ProfileWatchlist` | `/screens/disney/v1/Search` | `/screens/disney/v1/Splash` | `/screens/famous` | `/screens/famous/Choose` | `/screens/famous/Finish` | `/screens/famous/Game` | `/screens/famous/Splash` | `/screens/famous/Welcome` | `/screens/fitness/v1` | `/screens/fitness/v1/auth/SignIn` | `/screens/fitness/v1/auth/SignUp` | `/screens/fitness/v1/auth/Start` | `/screens/fitness/v1/home` | `/screens/instagram/v1` | `/screens/instagram/v1/Activity` | `/screens/instagram/v1/Home` | `/screens/instagram/v1/Profile` | `/screens/instagram/v1/Reels` | `/screens/instagram/v1/Search` | `/screens/instagram/v1/Splash` | `/screens/instagram/v2` | `/screens/instagram/v2/AddNewPost` | `/screens/instagram/v2/Explore` | `/screens/instagram/v2/ExploreDetail` | `/screens/instagram/v2/Home` | `/screens/instagram/v2/Notifications` | `/screens/instagram/v2/Post` | `/screens/instagram/v2/Posts` | `/screens/instagram/v2/Profile` | `/screens/instagram/v2/Splash` | `/screens/instagram/v2/Stories` | `/screens/instagram/v2/TaggedPhotos` | `/screens/instagram/v2/UserInfo` | `/screens/instagram/v2/UserPhotos` | `/screens/instagram/v2/ViewStory` | `/screens/paper` | `/screens/paper/Home` | `/screens/paper/Splash` | `/screens/tiktok/v1` | `/screens/tiktok/v1/discover` | `/screens/tiktok/v1/home` | `/screens/tiktok/v1/home/feed` | `/screens/tiktok/v1/inbox` | `/screens/tiktok/v1/profile` | `/screens/tiktok/v1/splash` | `/screens/tiktok/v2` | `/screens/tiktok/v2/Auth` | `/screens/tiktok/v2/Cameras` | `/screens/tiktok/v2/ChatSingle` | `/screens/tiktok/v2/Chats` | `/screens/tiktok/v2/EditProfile` | `/screens/tiktok/v2/EditProfileField` | `/screens/tiktok/v2/Feed` | `/screens/tiktok/v2/Profile` | `/screens/tiktok/v2/SavePost` | `/screens/tiktok/v2/Search` | `/screens/tiktok/v2/Splash` | `/screens/tinder/v1` | `/screens/tinder/v1/Home` | `/screens/tinder/v1/Matches` | `/screens/tinder/v1/Messages` | `/screens/tinder/v1/Profile` | `/screens/tinder/v1/Splash` | `/screens/tinder/v2` | `/screens/tinder/v2/Home` | `/screens/tinder/v2/Splash` | `/screens/translator` | `/screens/translator/card-sequence` | `/screens/translator/card-sequence/Header` | `/screens/translator/card-sequence/TranslatorCard` | `/screens/translator/credit` | `/screens/translator/full` | `/screens/translator/history` | `/screens/translator/history/Header` | `/screens/translator/history/HistoryCard` | `/screens/translator/home` | `/screens/translator/home/DrawerContent` | `/screens/translator/home/Header` | `/screens/translator/home/Input` | `/screens/translator/home/LanguageSelector` | `/screens/translator/home/RecentCard` | `/screens/translator/home/TranslatedCard` | `/screens/translator/oss` | `/screens/translator/oss/Card` | `/screens/translator/oss/Header` | `/screens/translator/splash` | `/screens/ubereats` | `/screens/ubereats/auth/SignIn` | `/screens/ubereats/auth/SignUp` | `/screens/ubereats/auth/Welcome` | `/screens/ubereats/main/Account` | `/screens/ubereats/main/Browser` | `/screens/ubereats/main/Cart` | `/screens/ubereats/main/Checkout` | `/screens/ubereats/main/Details` | `/screens/ubereats/main/Grocery` | `/screens/ubereats/main/Home` | `/screens/ubereats/main/Success` | `/screens/world` | `/screens/world/auth/SignIn` | `/screens/world/auth/SignUp` | `/screens/world/auth/Start` | `/screens/world/feed` | `/screens/world/home` | `/screens/world/profile` | `/screens/youtube/v1` | `/screens/youtube/v1/Home` | `/screens/youtube/v1/Splash` | `/services/apis/athena/auth` | `/services/apis/famous/main` | `/services/apis/fitness/v1/main` | `/services/apis/tiktok/v2/chat` | `/services/apis/tiktok/v2/posts` | `/services/apis/tiktok/v2/user` | `/services/apis/tiktok/v2/utils` | `/services/apis/world/main` | `/stores` | `/stores/athena` | `/stores/athena/auth` | `/stores/fitness/v1/main` | `/stores/tiktok/v2/auth` | `/stores/tiktok/v2/chat` | `/stores/tiktok/v2/modal` | `/stores/tiktok/v2/post` | `/stores/ubereats/auth` | `/stores/ubereats/basket` | `/stores/world/main` | `/styles/tiktok/v1` | `/styles/tiktok/v1/discover` | `/styles/tiktok/v1/feed` | `/styles/tiktok/v1/home` | `/styles/tiktok/v1/inbox` | `/styles/tiktok/v1/profile` | `/styles/tiktok/v2` | `/styles/tiktok/v2/button` | `/styles/tiktok/v2/general` | `/styles/tinder/v1` | `/types/athena` | `/types/tiktok/v2` | `/types/translator` | `/types/translator/declarations.d` | `/utils` | `/utils/device` | `/utils/firebase` | `/utils/http` | `/utils/i18n` | `/utils/preload/fonts` | `/utils/storage` | `/utils/translate` | `/utils/vector`;
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
