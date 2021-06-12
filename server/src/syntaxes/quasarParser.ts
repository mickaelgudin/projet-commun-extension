/* AutoGenerated Code, changes may be overwritten
* INPUT GRAMMAR:
* quasarElement := A | B | C | D | E | F | I | qKnob | L | M | qOptionGroup | qPagination | R | S | T
* A :=  qAjaxBar | qAvatar
* B :=  qBadge | qBanner | qBreadcrumb | qBtns
* C := qCheckbox | qColor | qCard | qCarousel | qChip | qCircularProgress | qChatMessage
* D := qDate | qDialog
* E := qEditor | qExpansionItem
* F := qField | qFile | qForm
* I := qIcon | qImg | qInfiniteScroll | qInnerLoading | qInput | qIntersection
* L := qLayout | qLinearProgress | qList
* M := qMarkupTable | qMenu
* R := qRadio | qRange | qResizeObserver
* S := qScrollObserver | qSelect | qSeparator | qSlider
* T := qTable | qTime | qToggle
* qAjaxBar := 'q-ajax-bar'
* qAvatar := 'q-avatar'
* qBadge := 'q-badge'
* qBanner := 'q-banner'
* qBar := 'q-bar'
* qBreadcrumb := 'q-breadcrumbs'
* qBtns := 'q-btn'$ | 'q-btn-group'$ | 'q-btn-dropdown'$ | 'q-toggle'$
* qCheckbox := 'q-checkbox'
* qColor := 'q-color'
* qCard := 'q-card'
* qCarousel := 'q-carousel'
* qChip := 'q-chip'
* qCircularProgress := 'q-circular-progress'
* qChatMessage := 'q-chat-message'
* qDate := 'q-date'
* qDialog := 'q-dialog'
* qEditor := 'q-editor'
* qExpansionItem := 'q-expansion-item'
* qField := 'q-field'
* qFile := 'q-file'
* qForm := 'q-form'
* qIcon := 'q-icon'
* qImg := 'q-img'
* qInfiniteScroll := 'q-infinite-scroll'
* qInnerLoading := 'q-inner-loading'
* qInput := 'q-input'
* qIntersection := 'q-intersection'
* qKnob := 'q-knob'
* qLayout := 'q-layout'
* qLinearProgress := 'q-linear-progress'
* qList := 'q-list'
* qMarkupTable := 'q-markup-table'
* qMenu := 'q-menu'
* qOptionGroup := 'q-option-group'
* qPagination := 'q-pagination'
* qRadio := 'q-radio'
* qRange := 'q-range'
* qResizeObserver := 'q-resize-observer'
* qScrollObserver := 'q-scroll-observer'
* qSelect := 'q-select'
* qSeparator := 'q-separator'
* qSlider := 'q-slider'
* qTable := 'q-table'
* qTime := 'q-time'
* qToggle := 'q-toggle'
*/
type Nullable<T> = T | null;
type $$RuleType<T> = () => Nullable<T>;
interface ASTNodeIntf {
    kind: ASTKinds;
}
export enum ASTKinds {
    quasarElement_1 = "quasarElement_1",
    quasarElement_2 = "quasarElement_2",
    quasarElement_3 = "quasarElement_3",
    quasarElement_4 = "quasarElement_4",
    quasarElement_5 = "quasarElement_5",
    quasarElement_6 = "quasarElement_6",
    quasarElement_7 = "quasarElement_7",
    quasarElement_8 = "quasarElement_8",
    quasarElement_9 = "quasarElement_9",
    quasarElement_10 = "quasarElement_10",
    quasarElement_11 = "quasarElement_11",
    quasarElement_12 = "quasarElement_12",
    quasarElement_13 = "quasarElement_13",
    quasarElement_14 = "quasarElement_14",
    quasarElement_15 = "quasarElement_15",
    A_1 = "A_1",
    A_2 = "A_2",
    B_1 = "B_1",
    B_2 = "B_2",
    B_3 = "B_3",
    B_4 = "B_4",
    C_1 = "C_1",
    C_2 = "C_2",
    C_3 = "C_3",
    C_4 = "C_4",
    C_5 = "C_5",
    C_6 = "C_6",
    C_7 = "C_7",
    D_1 = "D_1",
    D_2 = "D_2",
    E_1 = "E_1",
    E_2 = "E_2",
    F_1 = "F_1",
    F_2 = "F_2",
    F_3 = "F_3",
    I_1 = "I_1",
    I_2 = "I_2",
    I_3 = "I_3",
    I_4 = "I_4",
    I_5 = "I_5",
    I_6 = "I_6",
    L_1 = "L_1",
    L_2 = "L_2",
    L_3 = "L_3",
    M_1 = "M_1",
    M_2 = "M_2",
    R_1 = "R_1",
    R_2 = "R_2",
    R_3 = "R_3",
    S_1 = "S_1",
    S_2 = "S_2",
    S_3 = "S_3",
    S_4 = "S_4",
    T_1 = "T_1",
    T_2 = "T_2",
    T_3 = "T_3",
    qAjaxBar = "qAjaxBar",
    qAvatar = "qAvatar",
    qBadge = "qBadge",
    qBanner = "qBanner",
    qBar = "qBar",
    qBreadcrumb = "qBreadcrumb",
    qBtns_1 = "qBtns_1",
    qBtns_2 = "qBtns_2",
    qBtns_3 = "qBtns_3",
    qBtns_4 = "qBtns_4",
    qCheckbox = "qCheckbox",
    qColor = "qColor",
    qCard = "qCard",
    qCarousel = "qCarousel",
    qChip = "qChip",
    qCircularProgress = "qCircularProgress",
    qChatMessage = "qChatMessage",
    qDate = "qDate",
    qDialog = "qDialog",
    qEditor = "qEditor",
    qExpansionItem = "qExpansionItem",
    qField = "qField",
    qFile = "qFile",
    qForm = "qForm",
    qIcon = "qIcon",
    qImg = "qImg",
    qInfiniteScroll = "qInfiniteScroll",
    qInnerLoading = "qInnerLoading",
    qInput = "qInput",
    qIntersection = "qIntersection",
    qKnob = "qKnob",
    qLayout = "qLayout",
    qLinearProgress = "qLinearProgress",
    qList = "qList",
    qMarkupTable = "qMarkupTable",
    qMenu = "qMenu",
    qOptionGroup = "qOptionGroup",
    qPagination = "qPagination",
    qRadio = "qRadio",
    qRange = "qRange",
    qResizeObserver = "qResizeObserver",
    qScrollObserver = "qScrollObserver",
    qSelect = "qSelect",
    qSeparator = "qSeparator",
    qSlider = "qSlider",
    qTable = "qTable",
    qTime = "qTime",
    qToggle = "qToggle",
    $EOF = "$EOF",
}
export type quasarElement = quasarElement_1 | quasarElement_2 | quasarElement_3 | quasarElement_4 | quasarElement_5 | quasarElement_6 | quasarElement_7 | quasarElement_8 | quasarElement_9 | quasarElement_10 | quasarElement_11 | quasarElement_12 | quasarElement_13 | quasarElement_14 | quasarElement_15;
export type quasarElement_1 = A;
export type quasarElement_2 = B;
export type quasarElement_3 = C;
export type quasarElement_4 = D;
export type quasarElement_5 = E;
export type quasarElement_6 = F;
export type quasarElement_7 = I;
export type quasarElement_8 = qKnob;
export type quasarElement_9 = L;
export type quasarElement_10 = M;
export type quasarElement_11 = qOptionGroup;
export type quasarElement_12 = qPagination;
export type quasarElement_13 = R;
export type quasarElement_14 = S;
export type quasarElement_15 = T;
export type A = A_1 | A_2;
export type A_1 = qAjaxBar;
export type A_2 = qAvatar;
export type B = B_1 | B_2 | B_3 | B_4;
export type B_1 = qBadge;
export type B_2 = qBanner;
export type B_3 = qBreadcrumb;
export type B_4 = qBtns;
export type C = C_1 | C_2 | C_3 | C_4 | C_5 | C_6 | C_7;
export type C_1 = qCheckbox;
export type C_2 = qColor;
export type C_3 = qCard;
export type C_4 = qCarousel;
export type C_5 = qChip;
export type C_6 = qCircularProgress;
export type C_7 = qChatMessage;
export type D = D_1 | D_2;
export type D_1 = qDate;
export type D_2 = qDialog;
export type E = E_1 | E_2;
export type E_1 = qEditor;
export type E_2 = qExpansionItem;
export type F = F_1 | F_2 | F_3;
export type F_1 = qField;
export type F_2 = qFile;
export type F_3 = qForm;
export type I = I_1 | I_2 | I_3 | I_4 | I_5 | I_6;
export type I_1 = qIcon;
export type I_2 = qImg;
export type I_3 = qInfiniteScroll;
export type I_4 = qInnerLoading;
export type I_5 = qInput;
export type I_6 = qIntersection;
export type L = L_1 | L_2 | L_3;
export type L_1 = qLayout;
export type L_2 = qLinearProgress;
export type L_3 = qList;
export type M = M_1 | M_2;
export type M_1 = qMarkupTable;
export type M_2 = qMenu;
export type R = R_1 | R_2 | R_3;
export type R_1 = qRadio;
export type R_2 = qRange;
export type R_3 = qResizeObserver;
export type S = S_1 | S_2 | S_3 | S_4;
export type S_1 = qScrollObserver;
export type S_2 = qSelect;
export type S_3 = qSeparator;
export type S_4 = qSlider;
export type T = T_1 | T_2 | T_3;
export type T_1 = qTable;
export type T_2 = qTime;
export type T_3 = qToggle;
export type qAjaxBar = string;
export type qAvatar = string;
export type qBadge = string;
export type qBanner = string;
export type qBar = string;
export type qBreadcrumb = string;
export type qBtns = qBtns_1 | qBtns_2 | qBtns_3 | qBtns_4;
export interface qBtns_1 {
    kind: ASTKinds.qBtns_1;
}
export interface qBtns_2 {
    kind: ASTKinds.qBtns_2;
}
export interface qBtns_3 {
    kind: ASTKinds.qBtns_3;
}
export interface qBtns_4 {
    kind: ASTKinds.qBtns_4;
}
export type qCheckbox = string;
export type qColor = string;
export type qCard = string;
export type qCarousel = string;
export type qChip = string;
export type qCircularProgress = string;
export type qChatMessage = string;
export type qDate = string;
export type qDialog = string;
export type qEditor = string;
export type qExpansionItem = string;
export type qField = string;
export type qFile = string;
export type qForm = string;
export type qIcon = string;
export type qImg = string;
export type qInfiniteScroll = string;
export type qInnerLoading = string;
export type qInput = string;
export type qIntersection = string;
export type qKnob = string;
export type qLayout = string;
export type qLinearProgress = string;
export type qList = string;
export type qMarkupTable = string;
export type qMenu = string;
export type qOptionGroup = string;
export type qPagination = string;
export type qRadio = string;
export type qRange = string;
export type qResizeObserver = string;
export type qScrollObserver = string;
export type qSelect = string;
export type qSeparator = string;
export type qSlider = string;
export type qTable = string;
export type qTime = string;
export type qToggle = string;
export class QuasarParser {
    private readonly input: string;
    private pos: PosInfo;
    private negating: boolean = false;
    private memoSafe: boolean = true;
    constructor(input: string) {
        this.pos = {overallPos: 0, line: 1, offset: 0};
        this.input = input;
    }
    public reset(pos: PosInfo) {
        this.pos = pos;
    }
    public finished(): boolean {
        return this.pos.overallPos === this.input.length;
    }
    public clearMemos(): void {
    }
    public matchquasarElement($$dpth: number, $$cr?: ErrorTracker): Nullable<quasarElement> {
        return this.choice<quasarElement>([
            () => this.matchquasarElement_1($$dpth + 1, $$cr),
            () => this.matchquasarElement_2($$dpth + 1, $$cr),
            () => this.matchquasarElement_3($$dpth + 1, $$cr),
            () => this.matchquasarElement_4($$dpth + 1, $$cr),
            () => this.matchquasarElement_5($$dpth + 1, $$cr),
            () => this.matchquasarElement_6($$dpth + 1, $$cr),
            () => this.matchquasarElement_7($$dpth + 1, $$cr),
            () => this.matchquasarElement_8($$dpth + 1, $$cr),
            () => this.matchquasarElement_9($$dpth + 1, $$cr),
            () => this.matchquasarElement_10($$dpth + 1, $$cr),
            () => this.matchquasarElement_11($$dpth + 1, $$cr),
            () => this.matchquasarElement_12($$dpth + 1, $$cr),
            () => this.matchquasarElement_13($$dpth + 1, $$cr),
            () => this.matchquasarElement_14($$dpth + 1, $$cr),
            () => this.matchquasarElement_15($$dpth + 1, $$cr),
        ]);
    }
    public matchquasarElement_1($$dpth: number, $$cr?: ErrorTracker): Nullable<quasarElement_1> {
        return this.matchA($$dpth + 1, $$cr);
    }
    public matchquasarElement_2($$dpth: number, $$cr?: ErrorTracker): Nullable<quasarElement_2> {
        return this.matchB($$dpth + 1, $$cr);
    }
    public matchquasarElement_3($$dpth: number, $$cr?: ErrorTracker): Nullable<quasarElement_3> {
        return this.matchC($$dpth + 1, $$cr);
    }
    public matchquasarElement_4($$dpth: number, $$cr?: ErrorTracker): Nullable<quasarElement_4> {
        return this.matchD($$dpth + 1, $$cr);
    }
    public matchquasarElement_5($$dpth: number, $$cr?: ErrorTracker): Nullable<quasarElement_5> {
        return this.matchE($$dpth + 1, $$cr);
    }
    public matchquasarElement_6($$dpth: number, $$cr?: ErrorTracker): Nullable<quasarElement_6> {
        return this.matchF($$dpth + 1, $$cr);
    }
    public matchquasarElement_7($$dpth: number, $$cr?: ErrorTracker): Nullable<quasarElement_7> {
        return this.matchI($$dpth + 1, $$cr);
    }
    public matchquasarElement_8($$dpth: number, $$cr?: ErrorTracker): Nullable<quasarElement_8> {
        return this.matchqKnob($$dpth + 1, $$cr);
    }
    public matchquasarElement_9($$dpth: number, $$cr?: ErrorTracker): Nullable<quasarElement_9> {
        return this.matchL($$dpth + 1, $$cr);
    }
    public matchquasarElement_10($$dpth: number, $$cr?: ErrorTracker): Nullable<quasarElement_10> {
        return this.matchM($$dpth + 1, $$cr);
    }
    public matchquasarElement_11($$dpth: number, $$cr?: ErrorTracker): Nullable<quasarElement_11> {
        return this.matchqOptionGroup($$dpth + 1, $$cr);
    }
    public matchquasarElement_12($$dpth: number, $$cr?: ErrorTracker): Nullable<quasarElement_12> {
        return this.matchqPagination($$dpth + 1, $$cr);
    }
    public matchquasarElement_13($$dpth: number, $$cr?: ErrorTracker): Nullable<quasarElement_13> {
        return this.matchR($$dpth + 1, $$cr);
    }
    public matchquasarElement_14($$dpth: number, $$cr?: ErrorTracker): Nullable<quasarElement_14> {
        return this.matchS($$dpth + 1, $$cr);
    }
    public matchquasarElement_15($$dpth: number, $$cr?: ErrorTracker): Nullable<quasarElement_15> {
        return this.matchT($$dpth + 1, $$cr);
    }
    public matchA($$dpth: number, $$cr?: ErrorTracker): Nullable<A> {
        return this.choice<A>([
            () => this.matchA_1($$dpth + 1, $$cr),
            () => this.matchA_2($$dpth + 1, $$cr),
        ]);
    }
    public matchA_1($$dpth: number, $$cr?: ErrorTracker): Nullable<A_1> {
        return this.matchqAjaxBar($$dpth + 1, $$cr);
    }
    public matchA_2($$dpth: number, $$cr?: ErrorTracker): Nullable<A_2> {
        return this.matchqAvatar($$dpth + 1, $$cr);
    }
    public matchB($$dpth: number, $$cr?: ErrorTracker): Nullable<B> {
        return this.choice<B>([
            () => this.matchB_1($$dpth + 1, $$cr),
            () => this.matchB_2($$dpth + 1, $$cr),
            () => this.matchB_3($$dpth + 1, $$cr),
            () => this.matchB_4($$dpth + 1, $$cr),
        ]);
    }
    public matchB_1($$dpth: number, $$cr?: ErrorTracker): Nullable<B_1> {
        return this.matchqBadge($$dpth + 1, $$cr);
    }
    public matchB_2($$dpth: number, $$cr?: ErrorTracker): Nullable<B_2> {
        return this.matchqBanner($$dpth + 1, $$cr);
    }
    public matchB_3($$dpth: number, $$cr?: ErrorTracker): Nullable<B_3> {
        return this.matchqBreadcrumb($$dpth + 1, $$cr);
    }
    public matchB_4($$dpth: number, $$cr?: ErrorTracker): Nullable<B_4> {
        return this.matchqBtns($$dpth + 1, $$cr);
    }
    public matchC($$dpth: number, $$cr?: ErrorTracker): Nullable<C> {
        return this.choice<C>([
            () => this.matchC_1($$dpth + 1, $$cr),
            () => this.matchC_2($$dpth + 1, $$cr),
            () => this.matchC_3($$dpth + 1, $$cr),
            () => this.matchC_4($$dpth + 1, $$cr),
            () => this.matchC_5($$dpth + 1, $$cr),
            () => this.matchC_6($$dpth + 1, $$cr),
            () => this.matchC_7($$dpth + 1, $$cr),
        ]);
    }
    public matchC_1($$dpth: number, $$cr?: ErrorTracker): Nullable<C_1> {
        return this.matchqCheckbox($$dpth + 1, $$cr);
    }
    public matchC_2($$dpth: number, $$cr?: ErrorTracker): Nullable<C_2> {
        return this.matchqColor($$dpth + 1, $$cr);
    }
    public matchC_3($$dpth: number, $$cr?: ErrorTracker): Nullable<C_3> {
        return this.matchqCard($$dpth + 1, $$cr);
    }
    public matchC_4($$dpth: number, $$cr?: ErrorTracker): Nullable<C_4> {
        return this.matchqCarousel($$dpth + 1, $$cr);
    }
    public matchC_5($$dpth: number, $$cr?: ErrorTracker): Nullable<C_5> {
        return this.matchqChip($$dpth + 1, $$cr);
    }
    public matchC_6($$dpth: number, $$cr?: ErrorTracker): Nullable<C_6> {
        return this.matchqCircularProgress($$dpth + 1, $$cr);
    }
    public matchC_7($$dpth: number, $$cr?: ErrorTracker): Nullable<C_7> {
        return this.matchqChatMessage($$dpth + 1, $$cr);
    }
    public matchD($$dpth: number, $$cr?: ErrorTracker): Nullable<D> {
        return this.choice<D>([
            () => this.matchD_1($$dpth + 1, $$cr),
            () => this.matchD_2($$dpth + 1, $$cr),
        ]);
    }
    public matchD_1($$dpth: number, $$cr?: ErrorTracker): Nullable<D_1> {
        return this.matchqDate($$dpth + 1, $$cr);
    }
    public matchD_2($$dpth: number, $$cr?: ErrorTracker): Nullable<D_2> {
        return this.matchqDialog($$dpth + 1, $$cr);
    }
    public matchE($$dpth: number, $$cr?: ErrorTracker): Nullable<E> {
        return this.choice<E>([
            () => this.matchE_1($$dpth + 1, $$cr),
            () => this.matchE_2($$dpth + 1, $$cr),
        ]);
    }
    public matchE_1($$dpth: number, $$cr?: ErrorTracker): Nullable<E_1> {
        return this.matchqEditor($$dpth + 1, $$cr);
    }
    public matchE_2($$dpth: number, $$cr?: ErrorTracker): Nullable<E_2> {
        return this.matchqExpansionItem($$dpth + 1, $$cr);
    }
    public matchF($$dpth: number, $$cr?: ErrorTracker): Nullable<F> {
        return this.choice<F>([
            () => this.matchF_1($$dpth + 1, $$cr),
            () => this.matchF_2($$dpth + 1, $$cr),
            () => this.matchF_3($$dpth + 1, $$cr),
        ]);
    }
    public matchF_1($$dpth: number, $$cr?: ErrorTracker): Nullable<F_1> {
        return this.matchqField($$dpth + 1, $$cr);
    }
    public matchF_2($$dpth: number, $$cr?: ErrorTracker): Nullable<F_2> {
        return this.matchqFile($$dpth + 1, $$cr);
    }
    public matchF_3($$dpth: number, $$cr?: ErrorTracker): Nullable<F_3> {
        return this.matchqForm($$dpth + 1, $$cr);
    }
    public matchI($$dpth: number, $$cr?: ErrorTracker): Nullable<I> {
        return this.choice<I>([
            () => this.matchI_1($$dpth + 1, $$cr),
            () => this.matchI_2($$dpth + 1, $$cr),
            () => this.matchI_3($$dpth + 1, $$cr),
            () => this.matchI_4($$dpth + 1, $$cr),
            () => this.matchI_5($$dpth + 1, $$cr),
            () => this.matchI_6($$dpth + 1, $$cr),
        ]);
    }
    public matchI_1($$dpth: number, $$cr?: ErrorTracker): Nullable<I_1> {
        return this.matchqIcon($$dpth + 1, $$cr);
    }
    public matchI_2($$dpth: number, $$cr?: ErrorTracker): Nullable<I_2> {
        return this.matchqImg($$dpth + 1, $$cr);
    }
    public matchI_3($$dpth: number, $$cr?: ErrorTracker): Nullable<I_3> {
        return this.matchqInfiniteScroll($$dpth + 1, $$cr);
    }
    public matchI_4($$dpth: number, $$cr?: ErrorTracker): Nullable<I_4> {
        return this.matchqInnerLoading($$dpth + 1, $$cr);
    }
    public matchI_5($$dpth: number, $$cr?: ErrorTracker): Nullable<I_5> {
        return this.matchqInput($$dpth + 1, $$cr);
    }
    public matchI_6($$dpth: number, $$cr?: ErrorTracker): Nullable<I_6> {
        return this.matchqIntersection($$dpth + 1, $$cr);
    }
    public matchL($$dpth: number, $$cr?: ErrorTracker): Nullable<L> {
        return this.choice<L>([
            () => this.matchL_1($$dpth + 1, $$cr),
            () => this.matchL_2($$dpth + 1, $$cr),
            () => this.matchL_3($$dpth + 1, $$cr),
        ]);
    }
    public matchL_1($$dpth: number, $$cr?: ErrorTracker): Nullable<L_1> {
        return this.matchqLayout($$dpth + 1, $$cr);
    }
    public matchL_2($$dpth: number, $$cr?: ErrorTracker): Nullable<L_2> {
        return this.matchqLinearProgress($$dpth + 1, $$cr);
    }
    public matchL_3($$dpth: number, $$cr?: ErrorTracker): Nullable<L_3> {
        return this.matchqList($$dpth + 1, $$cr);
    }
    public matchM($$dpth: number, $$cr?: ErrorTracker): Nullable<M> {
        return this.choice<M>([
            () => this.matchM_1($$dpth + 1, $$cr),
            () => this.matchM_2($$dpth + 1, $$cr),
        ]);
    }
    public matchM_1($$dpth: number, $$cr?: ErrorTracker): Nullable<M_1> {
        return this.matchqMarkupTable($$dpth + 1, $$cr);
    }
    public matchM_2($$dpth: number, $$cr?: ErrorTracker): Nullable<M_2> {
        return this.matchqMenu($$dpth + 1, $$cr);
    }
    public matchR($$dpth: number, $$cr?: ErrorTracker): Nullable<R> {
        return this.choice<R>([
            () => this.matchR_1($$dpth + 1, $$cr),
            () => this.matchR_2($$dpth + 1, $$cr),
            () => this.matchR_3($$dpth + 1, $$cr),
        ]);
    }
    public matchR_1($$dpth: number, $$cr?: ErrorTracker): Nullable<R_1> {
        return this.matchqRadio($$dpth + 1, $$cr);
    }
    public matchR_2($$dpth: number, $$cr?: ErrorTracker): Nullable<R_2> {
        return this.matchqRange($$dpth + 1, $$cr);
    }
    public matchR_3($$dpth: number, $$cr?: ErrorTracker): Nullable<R_3> {
        return this.matchqResizeObserver($$dpth + 1, $$cr);
    }
    public matchS($$dpth: number, $$cr?: ErrorTracker): Nullable<S> {
        return this.choice<S>([
            () => this.matchS_1($$dpth + 1, $$cr),
            () => this.matchS_2($$dpth + 1, $$cr),
            () => this.matchS_3($$dpth + 1, $$cr),
            () => this.matchS_4($$dpth + 1, $$cr),
        ]);
    }
    public matchS_1($$dpth: number, $$cr?: ErrorTracker): Nullable<S_1> {
        return this.matchqScrollObserver($$dpth + 1, $$cr);
    }
    public matchS_2($$dpth: number, $$cr?: ErrorTracker): Nullable<S_2> {
        return this.matchqSelect($$dpth + 1, $$cr);
    }
    public matchS_3($$dpth: number, $$cr?: ErrorTracker): Nullable<S_3> {
        return this.matchqSeparator($$dpth + 1, $$cr);
    }
    public matchS_4($$dpth: number, $$cr?: ErrorTracker): Nullable<S_4> {
        return this.matchqSlider($$dpth + 1, $$cr);
    }
    public matchT($$dpth: number, $$cr?: ErrorTracker): Nullable<T> {
        return this.choice<T>([
            () => this.matchT_1($$dpth + 1, $$cr),
            () => this.matchT_2($$dpth + 1, $$cr),
            () => this.matchT_3($$dpth + 1, $$cr),
        ]);
    }
    public matchT_1($$dpth: number, $$cr?: ErrorTracker): Nullable<T_1> {
        return this.matchqTable($$dpth + 1, $$cr);
    }
    public matchT_2($$dpth: number, $$cr?: ErrorTracker): Nullable<T_2> {
        return this.matchqTime($$dpth + 1, $$cr);
    }
    public matchT_3($$dpth: number, $$cr?: ErrorTracker): Nullable<T_3> {
        return this.matchqToggle($$dpth + 1, $$cr);
    }
    public matchqAjaxBar($$dpth: number, $$cr?: ErrorTracker): Nullable<qAjaxBar> {
        return this.regexAccept(String.raw`(?:q-ajax-bar)`, $$dpth + 1, $$cr);
    }
    public matchqAvatar($$dpth: number, $$cr?: ErrorTracker): Nullable<qAvatar> {
        return this.regexAccept(String.raw`(?:q-avatar)`, $$dpth + 1, $$cr);
    }
    public matchqBadge($$dpth: number, $$cr?: ErrorTracker): Nullable<qBadge> {
        return this.regexAccept(String.raw`(?:q-badge)`, $$dpth + 1, $$cr);
    }
    public matchqBanner($$dpth: number, $$cr?: ErrorTracker): Nullable<qBanner> {
        return this.regexAccept(String.raw`(?:q-banner)`, $$dpth + 1, $$cr);
    }
    public matchqBar($$dpth: number, $$cr?: ErrorTracker): Nullable<qBar> {
        return this.regexAccept(String.raw`(?:q-bar)`, $$dpth + 1, $$cr);
    }
    public matchqBreadcrumb($$dpth: number, $$cr?: ErrorTracker): Nullable<qBreadcrumb> {
        return this.regexAccept(String.raw`(?:q-breadcrumbs)`, $$dpth + 1, $$cr);
    }
    public matchqBtns($$dpth: number, $$cr?: ErrorTracker): Nullable<qBtns> {
        return this.choice<qBtns>([
            () => this.matchqBtns_1($$dpth + 1, $$cr),
            () => this.matchqBtns_2($$dpth + 1, $$cr),
            () => this.matchqBtns_3($$dpth + 1, $$cr),
            () => this.matchqBtns_4($$dpth + 1, $$cr),
        ]);
    }
    public matchqBtns_1($$dpth: number, $$cr?: ErrorTracker): Nullable<qBtns_1> {
        return this.run<qBtns_1>($$dpth,
            () => {
                let $$res: Nullable<qBtns_1> = null;
                if (true
                    && this.regexAccept(String.raw`(?:q-btn)`, $$dpth + 1, $$cr) !== null
                    && this.match$EOF($$cr) !== null
                ) {
                    $$res = {kind: ASTKinds.qBtns_1, };
                }
                return $$res;
            });
    }
    public matchqBtns_2($$dpth: number, $$cr?: ErrorTracker): Nullable<qBtns_2> {
        return this.run<qBtns_2>($$dpth,
            () => {
                let $$res: Nullable<qBtns_2> = null;
                if (true
                    && this.regexAccept(String.raw`(?:q-btn-group)`, $$dpth + 1, $$cr) !== null
                    && this.match$EOF($$cr) !== null
                ) {
                    $$res = {kind: ASTKinds.qBtns_2, };
                }
                return $$res;
            });
    }
    public matchqBtns_3($$dpth: number, $$cr?: ErrorTracker): Nullable<qBtns_3> {
        return this.run<qBtns_3>($$dpth,
            () => {
                let $$res: Nullable<qBtns_3> = null;
                if (true
                    && this.regexAccept(String.raw`(?:q-btn-dropdown)`, $$dpth + 1, $$cr) !== null
                    && this.match$EOF($$cr) !== null
                ) {
                    $$res = {kind: ASTKinds.qBtns_3, };
                }
                return $$res;
            });
    }
    public matchqBtns_4($$dpth: number, $$cr?: ErrorTracker): Nullable<qBtns_4> {
        return this.run<qBtns_4>($$dpth,
            () => {
                let $$res: Nullable<qBtns_4> = null;
                if (true
                    && this.regexAccept(String.raw`(?:q-toggle)`, $$dpth + 1, $$cr) !== null
                    && this.match$EOF($$cr) !== null
                ) {
                    $$res = {kind: ASTKinds.qBtns_4, };
                }
                return $$res;
            });
    }
    public matchqCheckbox($$dpth: number, $$cr?: ErrorTracker): Nullable<qCheckbox> {
        return this.regexAccept(String.raw`(?:q-checkbox)`, $$dpth + 1, $$cr);
    }
    public matchqColor($$dpth: number, $$cr?: ErrorTracker): Nullable<qColor> {
        return this.regexAccept(String.raw`(?:q-color)`, $$dpth + 1, $$cr);
    }
    public matchqCard($$dpth: number, $$cr?: ErrorTracker): Nullable<qCard> {
        return this.regexAccept(String.raw`(?:q-card)`, $$dpth + 1, $$cr);
    }
    public matchqCarousel($$dpth: number, $$cr?: ErrorTracker): Nullable<qCarousel> {
        return this.regexAccept(String.raw`(?:q-carousel)`, $$dpth + 1, $$cr);
    }
    public matchqChip($$dpth: number, $$cr?: ErrorTracker): Nullable<qChip> {
        return this.regexAccept(String.raw`(?:q-chip)`, $$dpth + 1, $$cr);
    }
    public matchqCircularProgress($$dpth: number, $$cr?: ErrorTracker): Nullable<qCircularProgress> {
        return this.regexAccept(String.raw`(?:q-circular-progress)`, $$dpth + 1, $$cr);
    }
    public matchqChatMessage($$dpth: number, $$cr?: ErrorTracker): Nullable<qChatMessage> {
        return this.regexAccept(String.raw`(?:q-chat-message)`, $$dpth + 1, $$cr);
    }
    public matchqDate($$dpth: number, $$cr?: ErrorTracker): Nullable<qDate> {
        return this.regexAccept(String.raw`(?:q-date)`, $$dpth + 1, $$cr);
    }
    public matchqDialog($$dpth: number, $$cr?: ErrorTracker): Nullable<qDialog> {
        return this.regexAccept(String.raw`(?:q-dialog)`, $$dpth + 1, $$cr);
    }
    public matchqEditor($$dpth: number, $$cr?: ErrorTracker): Nullable<qEditor> {
        return this.regexAccept(String.raw`(?:q-editor)`, $$dpth + 1, $$cr);
    }
    public matchqExpansionItem($$dpth: number, $$cr?: ErrorTracker): Nullable<qExpansionItem> {
        return this.regexAccept(String.raw`(?:q-expansion-item)`, $$dpth + 1, $$cr);
    }
    public matchqField($$dpth: number, $$cr?: ErrorTracker): Nullable<qField> {
        return this.regexAccept(String.raw`(?:q-field)`, $$dpth + 1, $$cr);
    }
    public matchqFile($$dpth: number, $$cr?: ErrorTracker): Nullable<qFile> {
        return this.regexAccept(String.raw`(?:q-file)`, $$dpth + 1, $$cr);
    }
    public matchqForm($$dpth: number, $$cr?: ErrorTracker): Nullable<qForm> {
        return this.regexAccept(String.raw`(?:q-form)`, $$dpth + 1, $$cr);
    }
    public matchqIcon($$dpth: number, $$cr?: ErrorTracker): Nullable<qIcon> {
        return this.regexAccept(String.raw`(?:q-icon)`, $$dpth + 1, $$cr);
    }
    public matchqImg($$dpth: number, $$cr?: ErrorTracker): Nullable<qImg> {
        return this.regexAccept(String.raw`(?:q-img)`, $$dpth + 1, $$cr);
    }
    public matchqInfiniteScroll($$dpth: number, $$cr?: ErrorTracker): Nullable<qInfiniteScroll> {
        return this.regexAccept(String.raw`(?:q-infinite-scroll)`, $$dpth + 1, $$cr);
    }
    public matchqInnerLoading($$dpth: number, $$cr?: ErrorTracker): Nullable<qInnerLoading> {
        return this.regexAccept(String.raw`(?:q-inner-loading)`, $$dpth + 1, $$cr);
    }
    public matchqInput($$dpth: number, $$cr?: ErrorTracker): Nullable<qInput> {
        return this.regexAccept(String.raw`(?:q-input)`, $$dpth + 1, $$cr);
    }
    public matchqIntersection($$dpth: number, $$cr?: ErrorTracker): Nullable<qIntersection> {
        return this.regexAccept(String.raw`(?:q-intersection)`, $$dpth + 1, $$cr);
    }
    public matchqKnob($$dpth: number, $$cr?: ErrorTracker): Nullable<qKnob> {
        return this.regexAccept(String.raw`(?:q-knob)`, $$dpth + 1, $$cr);
    }
    public matchqLayout($$dpth: number, $$cr?: ErrorTracker): Nullable<qLayout> {
        return this.regexAccept(String.raw`(?:q-layout)`, $$dpth + 1, $$cr);
    }
    public matchqLinearProgress($$dpth: number, $$cr?: ErrorTracker): Nullable<qLinearProgress> {
        return this.regexAccept(String.raw`(?:q-linear-progress)`, $$dpth + 1, $$cr);
    }
    public matchqList($$dpth: number, $$cr?: ErrorTracker): Nullable<qList> {
        return this.regexAccept(String.raw`(?:q-list)`, $$dpth + 1, $$cr);
    }
    public matchqMarkupTable($$dpth: number, $$cr?: ErrorTracker): Nullable<qMarkupTable> {
        return this.regexAccept(String.raw`(?:q-markup-table)`, $$dpth + 1, $$cr);
    }
    public matchqMenu($$dpth: number, $$cr?: ErrorTracker): Nullable<qMenu> {
        return this.regexAccept(String.raw`(?:q-menu)`, $$dpth + 1, $$cr);
    }
    public matchqOptionGroup($$dpth: number, $$cr?: ErrorTracker): Nullable<qOptionGroup> {
        return this.regexAccept(String.raw`(?:q-option-group)`, $$dpth + 1, $$cr);
    }
    public matchqPagination($$dpth: number, $$cr?: ErrorTracker): Nullable<qPagination> {
        return this.regexAccept(String.raw`(?:q-pagination)`, $$dpth + 1, $$cr);
    }
    public matchqRadio($$dpth: number, $$cr?: ErrorTracker): Nullable<qRadio> {
        return this.regexAccept(String.raw`(?:q-radio)`, $$dpth + 1, $$cr);
    }
    public matchqRange($$dpth: number, $$cr?: ErrorTracker): Nullable<qRange> {
        return this.regexAccept(String.raw`(?:q-range)`, $$dpth + 1, $$cr);
    }
    public matchqResizeObserver($$dpth: number, $$cr?: ErrorTracker): Nullable<qResizeObserver> {
        return this.regexAccept(String.raw`(?:q-resize-observer)`, $$dpth + 1, $$cr);
    }
    public matchqScrollObserver($$dpth: number, $$cr?: ErrorTracker): Nullable<qScrollObserver> {
        return this.regexAccept(String.raw`(?:q-scroll-observer)`, $$dpth + 1, $$cr);
    }
    public matchqSelect($$dpth: number, $$cr?: ErrorTracker): Nullable<qSelect> {
        return this.regexAccept(String.raw`(?:q-select)`, $$dpth + 1, $$cr);
    }
    public matchqSeparator($$dpth: number, $$cr?: ErrorTracker): Nullable<qSeparator> {
        return this.regexAccept(String.raw`(?:q-separator)`, $$dpth + 1, $$cr);
    }
    public matchqSlider($$dpth: number, $$cr?: ErrorTracker): Nullable<qSlider> {
        return this.regexAccept(String.raw`(?:q-slider)`, $$dpth + 1, $$cr);
    }
    public matchqTable($$dpth: number, $$cr?: ErrorTracker): Nullable<qTable> {
        return this.regexAccept(String.raw`(?:q-table)`, $$dpth + 1, $$cr);
    }
    public matchqTime($$dpth: number, $$cr?: ErrorTracker): Nullable<qTime> {
        return this.regexAccept(String.raw`(?:q-time)`, $$dpth + 1, $$cr);
    }
    public matchqToggle($$dpth: number, $$cr?: ErrorTracker): Nullable<qToggle> {
        return this.regexAccept(String.raw`(?:q-toggle)`, $$dpth + 1, $$cr);
    }
    public test(): boolean {
        const mrk = this.mark();
        const res = this.matchquasarElement(0);
        const ans = res !== null;
        this.reset(mrk);
        return ans;
    }
    public parse(): ParseResultQuasar {
        const mrk = this.mark();
        const res = this.matchquasarElement(0);
        if (res)
            return {ast: res, errs: []};
        this.reset(mrk);
        const rec = new ErrorTracker();
        this.clearMemos();
        this.matchquasarElement(0, rec);
        const err = rec.getErr()
        return {ast: res, errs: err !== null ? [err] : []}
    }
    public mark(): PosInfo {
        return this.pos;
    }
    private loop<T>(func: $$RuleType<T>, star: boolean = false): Nullable<T[]> {
        const mrk = this.mark();
        const res: T[] = [];
        for (;;) {
            const t = func();
            if (t === null) {
                break;
            }
            res.push(t);
        }
        if (star || res.length > 0) {
            return res;
        }
        this.reset(mrk);
        return null;
    }
    private run<T>($$dpth: number, fn: $$RuleType<T>): Nullable<T> {
        const mrk = this.mark();
        const res = fn()
        if (res !== null)
            return res;
        this.reset(mrk);
        return null;
    }
    private choice<T>(fns: Array<$$RuleType<T>>): Nullable<T> {
        for (const f of fns) {
            const res = f();
            if (res !== null) {
                return res;
            }
        }
        return null;
    }
    private regexAccept(match: string, dpth: number, cr?: ErrorTracker): Nullable<string> {
        return this.run<string>(dpth,
            () => {
                const reg = new RegExp(match, "y");
                const mrk = this.mark();
                reg.lastIndex = mrk.overallPos;
                const res = this.tryConsume(reg);
                if(cr) {
                    cr.record(mrk, res, {
                        kind: "RegexMatch",
                        // We substring from 3 to len - 1 to strip off the
                        // non-capture group syntax added as a WebKit workaround
                        literal: match.substring(3, match.length - 1),
                        negated: this.negating,
                    });
                }
                return res;
            });
    }
    private tryConsume(reg: RegExp): Nullable<string> {
        const res = reg.exec(this.input);
        if (res) {
            let lineJmp = 0;
            let lind = -1;
            for (let i = 0; i < res[0].length; ++i) {
                if (res[0][i] === "\n") {
                    ++lineJmp;
                    lind = i;
                }
            }
            this.pos = {
                overallPos: reg.lastIndex,
                line: this.pos.line + lineJmp,
                offset: lind === -1 ? this.pos.offset + res[0].length : (res[0].length - lind - 1)
            };
            return res[0];
        }
        return null;
    }
    private noConsume<T>(fn: $$RuleType<T>): Nullable<T> {
        const mrk = this.mark();
        const res = fn();
        this.reset(mrk);
        return res;
    }
    private negate<T>(fn: $$RuleType<T>): Nullable<boolean> {
        const mrk = this.mark();
        const oneg = this.negating;
        this.negating = !oneg;
        const res = fn();
        this.negating = oneg;
        this.reset(mrk);
        return res === null ? true : null;
    }
    private memoise<K>(rule: $$RuleType<K>, memo: Map<number, [Nullable<K>, PosInfo]>): Nullable<K> {
        const $scope$pos = this.mark();
        const $scope$memoRes = memo.get($scope$pos.overallPos);
        if(this.memoSafe && $scope$memoRes !== undefined) {
        this.reset($scope$memoRes[1]);
        return $scope$memoRes[0];
        }
        const $scope$result = rule();
        if(this.memoSafe)
        memo.set($scope$pos.overallPos, [$scope$result, this.mark()]);
        return $scope$result;
    }
    private match$EOF(et?: ErrorTracker): Nullable<{kind: ASTKinds.$EOF}> {
        const res: {kind: ASTKinds.$EOF} | null = this.finished() ? { kind: ASTKinds.$EOF } : null;
        if(et)
            et.record(this.mark(), res, { kind: "EOF", negated: this.negating });
        return res;
    }
}
export function parse(s: string): ParseResultQuasar {
    const p = new QuasarParser(s);
    return p.parse();
}
export interface ParseResultQuasar {
    ast: Nullable<quasarElement>;
    errs: SyntaxErr[];
}
export interface PosInfo {
    readonly overallPos: number;
    readonly line: number;
    readonly offset: number;
}
export interface RegexMatch {
    readonly kind: "RegexMatch";
    readonly negated: boolean;
    readonly literal: string;
}
export type EOFMatch = { kind: "EOF"; negated: boolean };
export type MatchAttempt = RegexMatch | EOFMatch;
export class SyntaxErr {
    public pos: PosInfo;
    public expmatches: MatchAttempt[];
    constructor(pos: PosInfo, expmatches: MatchAttempt[]) {
        this.pos = pos;
        this.expmatches = [...expmatches];
    }
    public toString(): string {
        return `Syntax Error at line ${this.pos.line}:${this.pos.offset}. Expected one of ${this.expmatches.map(x => x.kind === "EOF" ? " EOF" : ` ${x.negated ? 'not ': ''}'${x.literal}'`)}`;
    }
}
class ErrorTracker {
    private mxpos: PosInfo = {overallPos: -1, line: -1, offset: -1};
    private regexset: Set<string> = new Set();
    private pmatches: MatchAttempt[] = [];
    public record(pos: PosInfo, result: any, att: MatchAttempt) {
        if ((result === null) === att.negated)
            return;
        if (pos.overallPos > this.mxpos.overallPos) {
            this.mxpos = pos;
            this.pmatches = [];
            this.regexset.clear()
        }
        if (this.mxpos.overallPos === pos.overallPos) {
            if(att.kind === "RegexMatch") {
                if(!this.regexset.has(att.literal))
                    this.pmatches.push(att);
                this.regexset.add(att.literal);
            } else {
                this.pmatches.push(att);
            }
        }
    }
    public getErr(): SyntaxErr | null {
        if (this.mxpos.overallPos !== -1)
            return new SyntaxErr(this.mxpos, this.pmatches);
        return null;
    }
}