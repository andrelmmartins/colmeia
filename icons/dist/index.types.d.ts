import * as react_jsx_runtime from 'react/jsx-runtime';

interface IBreakPoint {
    xs: string;
    sm: string;
    md: string;
    lg: string;
}
interface IFontSize {
    xxxs: string;
    xxs: string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
    xxxl: string;
    display: string;
    giant: string;
}
interface IFontHeight {
    default: string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
}
interface IIconSize {
    xxxs: string;
    xxs: string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
    xxxl: string;
    display: string;
    giant: string;
}
interface IBorderRadius {
    none: string;
    sm: string;
    md: string;
    lg: string;
    pill: string;
    circular: string;
}
interface IOpacity {
    semiOpaque: string;
    intense: string;
    medium: string;
    light: string;
    semiTransparent: string;
}
interface IBorderWidth {
    none: string;
    hairline: string;
    thin: string;
    thick: string;
    heavy: string;
}
interface ISpacing {
    quarck: string;
    nano: string;
    micro: string;
    xxxs: string;
    xxs: string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
    xxxl: string;
    huge: string;
    giant: string;
}
interface IPadding {
    quarck: string;
    nano: string;
    micro: string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
}
interface IShadow {
    l1: string;
    l2: string;
    l3: string;
    l4: string;
    select: string;
}
interface IFontWeight {
    regular: number;
    semiBold: number;
    bold: number;
}
interface ColorTypes {
    pure: string;
    light: string;
    medium: string;
    dark: string;
}
interface IColor {
    background: ColorTypes;
    core: {
        primary: ColorTypes;
        secondary: ColorTypes;
        highlight: ColorTypes;
    };
    neutral: {
        hairline: ColorTypes;
        medium: ColorTypes;
        low: ColorTypes;
        high: ColorTypes;
    };
    feedback: {
        warning: ColorTypes;
        helper: ColorTypes;
        success: ColorTypes;
    };
}
interface IBorder {
    hairline: string;
    thin: string;
    thick: string;
    heavy: string;
}
type CustomDefaultTheme = {
    breakPoint: IBreakPoint;
    fontSize: IFontSize;
    lineHeight: IFontHeight;
    iconSize: IIconSize;
    borderRadius: IBorderRadius;
    borderWidth: IBorderWidth;
    opacity: IOpacity;
    spacing: ISpacing;
    padding: IPadding;
    pallete: IColor;
    fontWeight: IFontWeight;
    shadow: IShadow;
    border: IBorder;
};
declare const defaultTheme: CustomDefaultTheme;

type Core = keyof typeof defaultTheme.pallete.core;
type Neutral = keyof typeof defaultTheme.pallete.neutral;
type Feedback = keyof typeof defaultTheme.pallete.feedback;
type Color = `core.${Core}.${keyof ColorTypes}` | `neutral.${Neutral}.${keyof ColorTypes}` | `feedback.${Feedback}.${keyof ColorTypes}` | `#${string}`;

type IconPathProps = {
    width?: string;
    height?: string;
    fill?: string | Color;
    fillPath?: string | Color;
    stroke?: string;
    className?: string;
    [key: string]: any;
};

type IconSize = 'SM' | 'MD' | 'LG';
type IconProps = {
    /**
     * SM: 1rem (16px) / MD: 1.5rem (24px) / LG: 2rem (32px)
     */
    size?: 'SM' | 'MD' | 'LG';
    width?: string;
    height?: string;
    className?: string;
    [key: string]: any;
};
declare const translateSizeToWidth: (size?: IconSize) => "1rem" | "2rem" | "1.5rem";

declare const AccountBalanceBank: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const AccountBalance$1: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const AccountCircle: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const Add: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const AddNotes$1: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const Api1: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const ApiAdd: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const Api: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const ArrowDownwardAlt: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const ArrowDropDown: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const ArrowDropUp$1: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const ArrowLeftAlt: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const Arrow: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const ArrowOutward: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const ArrowRightAlt: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const ArrowUpwardAlt: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const AttachFile: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const AttachMoney$1: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const BackDocument: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const Balance: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const Bank: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const Block: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const Browse: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const Cached: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const CalendarToday: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const Call: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const CallReceived: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const CardsVisible$1: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const ChargeFilled: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const CheckBox: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const CheckList: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const Check: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const CheckPriority$2: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const CheckPriority$1: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const ChevronLeft: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const ChevronRight: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const CloseBox$1: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const Close: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const Computer: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const ContentCopy: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const ContentPasteSearch: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const ContractEdit: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const CurrencyExchangeLeft: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const CurrencyExchangeRight: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const Dashboard: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const Delete: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const Description: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const Devices: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const DoNotDisturbOn: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const Document: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const Domain: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const DoneAll$1: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const Download: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const DragHandle: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const EditCalendar$1: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const Edit: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const Event: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const Exclamation: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const ExpandLess: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const ExpandMore: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const FileCopy: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const FilterAlt$1: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const Folder: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const FolderOpen: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const FormUser: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const FrontDocument: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const Groups: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const Help: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const HiddenCards$1: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const Home: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const Info: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const Instagram: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const Integration: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const Key: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const Language: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const Linkedin: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const List: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const LocationOn: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const Lock: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const LockOpen: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const LockReset: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const Logout: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const Mail: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const MarkEmailUnread: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const MobileConnected: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const Money: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const MoneyOff: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const MoneySafe: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const Monitoring: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const Moon: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const MoreVert: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const News: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const Notifications: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const NoteStackAdd: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const OpenFinance$1: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const OpenInNew: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const OtherPeople: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const PageInfo: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const PanMove: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const Payments: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const Pending: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const Percent: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const PersonAdd: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const Person: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const PicPay: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const Pix: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const Points: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const Publish: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const QrCode: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const Receipt: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const Receive: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const ReceiveConfirm: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const Remove: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const Replay: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const RequestQuote: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const Schedule: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const Search: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const Selfie: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const Send: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const SendEMail: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const Settings: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const Share: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const Shield: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const ShieldLock: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const Shuffle: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const Smartphone: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const ShoppingMode: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const Star: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const Subtitles: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const Sun: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const SupervisorAccount: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const Target$1: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const TaskAlt: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const TextSnippet$1: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const ToggleOff$1: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const ToggleOn$1: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const Transfer$1: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const Transfer: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const Tune: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const ViewList: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const Visibility: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const VisibilityOff$1: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const Warning: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const Whatsapp: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const Youtube: ({ size, width, height, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

declare const index_CheckList: typeof CheckList;
declare const index_CurrencyExchangeLeft: typeof CurrencyExchangeLeft;
declare const index_CurrencyExchangeRight: typeof CurrencyExchangeRight;
declare const index_MoneyOff: typeof MoneyOff;
declare const index_PicPay: typeof PicPay;
declare const index_ReceiveConfirm: typeof ReceiveConfirm;
declare namespace index {
  export {
    AccountBalanceBank as AccountBalanceBankNewIcon,
    AccountBalance$1 as AccountBalanceNewIcon,
    AccountCircle as AccountCircleFilledNewIcon,
    Add as AddNewIcon,
    AddNotes$1 as AddNotesNewIcon,
    Api1 as Api1NewIcon,
    ApiAdd as ApiAddNewIcon,
    Api as ApiNewIcon,
    ArrowDownwardAlt as ArrowDownwardAltNewIcon,
    ArrowDropDown as ArrowDropDownNewIcon,
    ArrowDropUp$1 as ArrowDropUpNewIcon,
    ArrowLeftAlt as ArrowLeftAltNewIcon,
    Arrow as ArrowNewIcon,
    ArrowOutward as ArrowOutwardNewIcon,
    ArrowRightAlt as ArrowRightAltNewIcon,
    ArrowUpwardAlt as ArrowUpwardAltNewIcon,
    AttachFile as AttachFileNewIcon,
    AttachMoney$1 as AttachMoneyNewIcon,
    BackDocument as BackDocumentNewIcon,
    Balance as BalanceNewIcon,
    Bank as BankFilledNewIcon,
    Block as BlockNewIcon,
    Browse as BrowseNewIcon,
    Cached as CachedNewIcon,
    CalendarToday as CalendarTodayNewIcon,
    Call as CallNewIcon,
    CallReceived as CallReceivedNewIcon,
    CardsVisible$1 as CardsVisibleNewIcon,
    ChargeFilled as ChargeFilledNewIcon,
    CheckBox as CheckBoxFilledNewIcon,
    index_CheckList as CheckList,
    Check as CheckNewIcon,
    CheckPriority$2 as CheckPriorityFilledNewIcon,
    CheckPriority$1 as CheckPriorityNewIcon,
    ChevronLeft as ChevronLeftNewIcon,
    ChevronRight as ChevronRightNewIcon,
    CloseBox$1 as CloseBoxNewIcon,
    Close as CloseNewIcon,
    Computer as ComputerNewIcon,
    ContentCopy as ContentCopyNewIcon,
    ContentPasteSearch as ContentPasteSearchNewIcon,
    ContractEdit as ContractEditNewIcon,
    index_CurrencyExchangeLeft as CurrencyExchangeLeft,
    index_CurrencyExchangeRight as CurrencyExchangeRight,
    Dashboard as DashboardFilledNewIcon,
    Delete as DeleteNewIcon,
    Description as DescriptionNewIcon,
    Devices as DevicesNewIcon,
    DoNotDisturbOn as DoNotDisturbOnNewIcon,
    Document as DocumentNewIcon,
    Domain as DomainNewIcon,
    DoneAll$1 as DoneAllNewIcon,
    Download as DownloadNewIcon,
    DragHandle as DragHandleNewIcon,
    EditCalendar$1 as EditCalendarNewIcon,
    Edit as EditNewIcon,
    Event as EventNewIcon,
    Exclamation as ExclamationNewIcon,
    ExpandLess as ExpandLessNewIcon,
    ExpandMore as ExpandMoreNewIcon,
    FileCopy as FileCopyNewIcon,
    FilterAlt$1 as FilterAltNewIcon,
    Folder as FolderNewIcon,
    FolderOpen as FolderOpenNewIcon,
    FormUser as FormUserNewIcon,
    FrontDocument as FrontDocumentNewIcon,
    Groups as GroupsNewIcon,
    Help as HelpNewIcon,
    HiddenCards$1 as HiddenCardsNewIcon,
    Home as HomeFilledNewIcon,
    Info as InfoNewIcon,
    Instagram as InstagramNewIcon,
    Integration as IntegrationNewIcon,
    Key as KeyNewIcon,
    Language as LanguageNewIcon,
    Linkedin as LinkedinNewIcon,
    List as ListFilledNewIcon,
    LocationOn as LocationOnNewIcon,
    Lock as LockNewIcon,
    LockOpen as LockOpenNewIcon,
    LockReset as LockResetNewIcon,
    Logout as LogoutNewIcon,
    Mail as MailNewIcon,
    MarkEmailUnread as MarkEmailUnreadNewIcon,
    MobileConnected as MobileConnectedNewIcon,
    Money as MoneyNewIcon,
    index_MoneyOff as MoneyOff,
    MoneySafe as MoneySafeNewIcon,
    Monitoring as MonitoringNewIcon,
    Moon as MoonNewIcon,
    MoreVert as MoreVertNewIcon,
    News as NewsNewIcon,
    NoteStackAdd as NoteStackAddNewIcon,
    Notifications as NotificationsNewIcon,
    OpenFinance$1 as OpenFinanceNewIcon,
    OpenInNew as OpenInNewNewIcon,
    OtherPeople as OtherPeopleNewIcon,
    PageInfo as PageInfoNewIcon,
    PanMove as PanMoveNewIcon,
    Payments as PaymentsNewIcon,
    Pending as PendingNewIcon,
    Percent as PercentNewIcon,
    PersonAdd as PersonAddNewIcon,
    Person as PersonNewIcon,
    index_PicPay as PicPay,
    Pix as PixFilledNewIcon,
    Points as PointsNewIcon,
    Publish as PublishNewIcon,
    QrCode as QrCodeNewIcon,
    Receipt as ReceiptNewIcon,
    index_ReceiveConfirm as ReceiveConfirm,
    Receive as ReceiveNewIcon,
    Remove as RemoveNewIcon,
    Replay as ReplayNewIcon,
    RequestQuote as RequestQuoteNewIcon,
    Schedule as ScheduleNewIcon,
    Search as SearchNewIcon,
    Selfie as SelfieNewIcon,
    SendEMail as SendEMailNewIcon,
    Send as SendNewIcon,
    Settings as SettingsFilledNewIcon,
    Share as ShareNewIcon,
    ShieldLock as ShieldLockNewIcon,
    Shield as ShieldNewIcon,
    ShoppingMode as ShoppingModeNewIcon,
    Shuffle as ShuffleNewIcon,
    Smartphone as SmartphoneNewIcon,
    Star as StarNewIcon,
    Subtitles as SubtitlesNewIcon,
    Sun as SunNewIcon,
    SupervisorAccount as SupervisorAccountNewIcon,
    Target$1 as TargetNewIcon,
    TaskAlt as TaskAltNewIcon,
    TextSnippet$1 as TextSnippetNewIcon,
    ToggleOff$1 as ToggleOffNewIcon,
    ToggleOn$1 as ToggleOnNewIcon,
    Transfer as TransferFilledNewIcon,
    Transfer$1 as TransferNewIcon,
    Tune as TuneNewIcon,
    ViewList as ViewListNewIcon,
    Visibility as VisibilityNewIcon,
    VisibilityOff$1 as VisibilityOffNewIcon,
    Warning as WarningNewIcon,
    Whatsapp as WhatsappNewIcon,
    Youtube as YoutubeNewIcon,
  };
}

declare const AlertIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const AmericanCardBrand: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const ArrowDown: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const ArrowDownToArcIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const ArrowLeftToArcIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const ArrowRight: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const ArrowUpToArcIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const AttachMoney: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const BadgeIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const BankInstitutionIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const BarCode: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const BeeSymbolBlack: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const BeeSymbolW: ({ width, height, fill, fillPath, className, ...props }: IconPathProps & {
    className?: string;
}) => react_jsx_runtime.JSX.Element;

declare const BeetellerTypoBlack: ({ width, height, fill, fillPath, className, ...props }: IconPathProps & {
    className?: string;
}) => react_jsx_runtime.JSX.Element;

declare const BeetellerTypoWhite: ({ width, height, fill, fillPath, className, ...props }: IconPathProps & {
    className?: string;
}) => react_jsx_runtime.JSX.Element;

declare const CalendarIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const CaretLeftIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const CaretRightIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const CashIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const CheckMD: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const CheckIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const CheckmarkIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const ChevronRightIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const ChevronLeftIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const ChevronDownIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const CircleBlockIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const CircleCheckIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const CircleEllipsis: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const CircleUncheckIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const CircleWarnIcon: ({ width, height, fill, fillPath, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const CloseIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const ColmeiaIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const ContactSuport: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const CopyIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const CopyPasteIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const CreditCard: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const CurrencyExchangeIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const DescriptionIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const DinersCardBrand: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const EditIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const EditNoteIcon: ({ width, height, fill, fillPath, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const EllipsisIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const EllipsisVertical: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const EloBrand: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const EmailIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const EmailVector: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const ErrorMD: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const EventBusyIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const EventIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const FilterIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const HelpIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const HighLighIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const HighLightOff: ({ width, height, fill, fillPath, className, }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const HiperCardBrand: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const MasterCardBrand: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const MoreVertIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const NotificationIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const PaymentsIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const PdfFileicon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const PercentIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const PixIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const PlagiarismDocIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const PrinterIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const PrivacyTipIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const ProgressIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const RefreshIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const ReplayIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const RequestQuoteIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const RightLeftIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const SearchGlassIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const SearchIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const SettingsIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const StarIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const StoreFront: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const TagDefault: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const TargetLinkIcon: ({ width, height, fill, stroke, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const TextSnippet: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const TrashIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const TrendingDownIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const TrendingFlatIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const TrendingUpIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const UserIcon: ({ width, height, fill, fillPath, stroke, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const UserSearchIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const VisaBrand: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const VisibilityOff: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const VisibilityOn: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const WarningMD: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const WebhookIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const WhatsAppIcon: ({ width, height, fill, fillPath, stroke, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const PendingIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const ProgressIconStatic: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const BrandBankIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const PersonIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const DomainIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const InvoicingBankIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const PartnersBankIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const DocumentIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const TimeIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const ArrowLeft: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const LogoutIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const LocationIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const FilterBankIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const SecurityIcon$1: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const AccountIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const HomeBankIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const ListsBankIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const SettingsBankIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const MenuBankIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const TaskAllIcons: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const DoneAll: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const FileUpload: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const WordIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const FolderIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const RecipeIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const ReportIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const SalesIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const LimiteIcons: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const OperatorsIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const DevicesIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const DadosIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const SecurityIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const TelefoneIcons: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const PlusIcons: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const TrashIcons: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const OpenDocumentIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const FrontDocumentIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const BackDocumentIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const ExclamationIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const FolderOpenIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const BeetellerBankIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const SicrediBankIcon: ({ width, height, fill, fillPathOne, fillPathTwo, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const SantanderBankIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const ItauBankIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const BradescoBankIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const BancoDoBrasilBankIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const CaixaBankIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const NubankBankIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const InterBankIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const SicoobBankIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const C6BankIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const BankIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const TransferBankIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const SettingsSimpleBankIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const CheckPriorityBankIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const SecurityBankIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const IntegrationBankIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const DraggableHandle: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const ReceiveIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const MoneyIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const KeyIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const UserPlusIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const ArrowUpwardAltIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const ArrowDownwardAltIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const SendEmailIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const OtherPeopleIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const SunIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const MoonIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const ScheduleIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const ContentPasteSearchIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const TuneIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const ContentCopyIcon: ({ width, height, fill, fillPath, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const ContentCopyAltIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const ResetPasswordIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const MobileConectedIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const MonitoringIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const ContractEditIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const ShieldLockIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const SelfieIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const MoneySafeIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const BalanceIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const QRCodeIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const ViewListIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const ShuffleIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const LockIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const RemoveIcon: ({ width, height, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const ShareIcon: ({ width, height, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const PendingIconCircled: ({ width, height, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const InstagramIcon: ({ width, height, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const LocationONIcon: ({ width, height, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const DoNotDisturb: ({ width, height, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const NewCheck: ({ width, height, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const PointsIcons: ({ width, height, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const PanMoveIcon: ({ width, height, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const LinkedinIcon: ({ width, height, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const ExpandLessIcon: ({ width, height, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const ExpandMoreIcon: ({ width, height, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const ArrowDropDownIcon: ({ width, height, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const ArrowDropUp: ({ width, height, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const ArrowOutWard: ({ width, height, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const IntegrationIcon: ({ width, height, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const CallReceivedIcon: ({ width, height, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const ArrowRigthUpIcon: ({ width, height, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const ReceiptIcon: ({ width, height, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const NewsPaperIcon: ({ width, height, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const BrowseIcon: ({ width, height, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const APIIcon: ({ width, height, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const APIAddIcon: ({ width, height, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const DawnloadIcon: ({ width, height, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const SimpleExclamationIcon: ({ width, height, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const SimpleFolderIcon: ({ width, height, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const ComputerIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const SubtitleIcon: ({ width, height, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const ArrowUpWardAlt: ({ width, height, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const ArrowDownWardAlt: ({ width, height, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const MarkEmailIcon: ({ width, height, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const CheckPriority: ({ width, height, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const YouTubeIcon: ({ width, height, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const BrowseIconFilled: ({ width, height, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const AccountIconFilled: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const BarCodeSimple: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const HiddenCards: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const CardsVisible: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const SmartphoneIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const SendIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const FilterAlt: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const CloseBox: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const ToggleOff: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const ToggleOn: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const EditCalendar: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const Target: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const AccountBalance: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const GroupsIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const OpenFinance: ({ width, height, fill, fillPath, stroke, strokeWidth, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const AddNotes: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const DeleteIcon: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const Arrowlight: ({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element;

declare const findIconByLabel: (label: string) => (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps & {
    className?: string;
}) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps & {
    className?: string;
}) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps & {
    className?: string;
}) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, stroke, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, stroke, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, stroke, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPathOne, fillPathTwo, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, stroke, strokeWidth, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element) | (({ width, height, fill, fillPath, className, ...props }: IconPathProps) => react_jsx_runtime.JSX.Element);

export { APIAddIcon, APIIcon, AccountBalance, AccountIcon, AccountIconFilled, AddNotes, AlertIcon, AmericanCardBrand, ProgressIcon as AnimatedProgress, ArrowDown, ArrowDownToArcIcon as ArrowDownToArc, ArrowDownWardAlt, ArrowDownwardAltIcon, ArrowDropDownIcon, ArrowDropUp, ArrowLeft, ArrowLeftToArcIcon as ArrowLeftToArc, ArrowOutWard, ArrowRight, ArrowRigthUpIcon, ArrowUpToArcIcon as ArrowUpToArc, ArrowUpWardAlt, ArrowUpwardAltIcon, Arrowlight, AttachMoney, BackDocumentIcon, BadgeIcon as Badge, BalanceIcon, BancoDoBrasilBankIcon, BankIcon, BankInstitutionIcon as BankInstitution, BarCode, BarCodeSimple, BeeSymbolBlack, BeeSymbolW, BeetellerTypoBlack as BeeTypoB, BeetellerTypoWhite as BeeTypoW, BeetellerBankIcon, BradescoBankIcon, BrandBankIcon, BrowseIcon, BrowseIconFilled, C6BankIcon, CaixaBankIcon, CalendarIcon as Calendar, CallReceivedIcon, CardsVisible, CaretLeftIcon, CaretRightIcon, CashIcon as Cash, CheckMD as Check, CheckIcon, CheckPriority, CheckPriorityBankIcon, CheckmarkIcon as Checkmark, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, CircleBlockIcon as CircleBlock, CircleCheckIcon as CircleCheck, CircleEllipsis, CircleUncheckIcon as CircleUnchekedIcon, CircleWarnIcon as CircleWarn, CloseIcon as Close, CloseBox, ColmeiaIcon, ComputerIcon, ContactSuport, ContentCopyAltIcon, ContentCopyIcon, ContentPasteSearchIcon, ContractEditIcon, CopyIcon, CopyPasteIcon, CreditCard, CurrencyExchangeIcon as CurrencyExchange, DadosIcon, DawnloadIcon, DeleteIcon, DescriptionIcon, DevicesIcon, DinersCardBrand, DoNotDisturb, DocumentIcon, DomainIcon, DoneAll, DraggableHandle, EditIcon as Edit, EditCalendar, EditNoteIcon, EllipsisIcon, EllipsisVertical, EloBrand, EmailIcon, EmailVector, ErrorMD as Error, EventBusyIcon, EventIcon, ExclamationIcon, ExpandLessIcon, ExpandMoreIcon, FileUpload, FilterIcon as Filter, FilterAlt, FilterBankIcon, FolderIcon, FolderOpenIcon, FrontDocumentIcon, GroupsIcon, HelpIcon as HelperIcon, HiddenCards, HighLighIcon as HighLightIcon, HighLightOff, HiperCardBrand, HomeBankIcon, InstagramIcon, IntegrationBankIcon, IntegrationIcon, InterBankIcon, InvoicingBankIcon, ItauBankIcon, KeyIcon, LimiteIcons, LinkedinIcon, ListsBankIcon, LocationIcon, LocationONIcon, LockIcon, LogoutIcon, MarkEmailIcon, MasterCardBrand, MenuBankIcon, MobileConectedIcon, MoneyIcon, MoneySafeIcon, MonitoringIcon, MoonIcon, MoreVertIcon, NewCheck, NewsPaperIcon, NotificationIcon as Notification, NubankBankIcon, OpenDocumentIcon, OpenFinance, OperatorsIcon, OtherPeopleIcon, PanMoveIcon, PartnersBankIcon, PaymentsIcon, PdfFileicon as PdfFile, PendingIcon, PendingIconCircled, PercentIcon as Percent, PersonIcon, PixIcon as Pix, PixIcon, PlagiarismDocIcon as PlagiarismDoc, PlusIcons, PointsIcons, PrinterIcon as Printer, PrivacyTipIcon, ProgressIconStatic, QRCodeIcon, ReceiptIcon, ReceiveIcon, RecipeIcon, RefreshIcon as Refresh, RemoveIcon, ReplayIcon, ReportIcon, RequestQuoteIcon, ResetPasswordIcon, RightLeftIcon as RightLeft, SalesIcon, SantanderBankIcon, ScheduleIcon, SearchIcon as Search, SearchGlassIcon, SecurityBankIcon, SecurityIcon$1 as SecurityIcon, SecurityIcon as SecurityIcons, SelfieIcon, SendEmailIcon, SendIcon, SettingsIcon as Settings, SettingsBankIcon, SettingsSimpleBankIcon, ShareIcon, ShieldLockIcon, ShuffleIcon, SicoobBankIcon, SicrediBankIcon, SimpleExclamationIcon, SimpleFolderIcon, SmartphoneIcon, StarIcon as Star, StoreFront, SubtitleIcon, SunIcon, TagDefault, Target, TargetLinkIcon, TaskAllIcons, TelefoneIcons, TextSnippet, TimeIcon, ToggleOff, ToggleOn, TransferBankIcon, TrashIcon as Trash, TrashIcons, TrendingDownIcon, TrendingFlatIcon, TrendingUpIcon, TuneIcon, UserIcon as User, UserPlusIcon, UserSearchIcon, ViewListIcon, VisaBrand, VisibilityOff, VisibilityOn, WarningMD as Warning, WebhookIcon, WhatsAppIcon, WordIcon, YouTubeIcon, findIconByLabel, index as newIcons, translateSizeToWidth };
export type { IconPathProps, IconProps };
