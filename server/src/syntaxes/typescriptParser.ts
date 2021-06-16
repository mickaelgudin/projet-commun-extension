/* AutoGenerated Code, changes may be overwritten
* INPUT GRAMMAR:
* element := vueDecorator | meteorFunction | vueRouter
* vueDecorator := 'Mixins' | propDecorator | modelDecorator | watchDecorator | provideDecorator | injectDecorator | emitDecorator | refDecorator | componentDecorator
* propDecorator := '@Prop'$ | '@PropSync'$
* modelDecorator := '@Model'$ | '@ModelSync'$ | '@VModel'
* watchDecorator := '@Watch'
* provideDecorator := '@Provide'$ | '@ProvideReactive'$
* injectDecorator := '@Inject'$ | '@InjectReactive'$
* emitDecorator := '@Emit'
* refDecorator := '@Ref'
* componentDecorator := '@Component'
* meteorFunction := 'Meteor[.]' meteorMethods
* meteorMethods := 'startup' | 'methods' | 'publish'
* vueRouter := 'new VueRouter'$
*/
type Nullable<T> = T | null;
type $$RuleType<T> = () => Nullable<T>;
interface ASTNodeIntf {
    kind: ASTKinds;
}
export enum ASTKinds {
    element_1 = "element_1",
    element_2 = "element_2",
    element_3 = "element_3",
    vueDecorator_1 = "vueDecorator_1",
    vueDecorator_2 = "vueDecorator_2",
    vueDecorator_3 = "vueDecorator_3",
    vueDecorator_4 = "vueDecorator_4",
    vueDecorator_5 = "vueDecorator_5",
    vueDecorator_6 = "vueDecorator_6",
    vueDecorator_7 = "vueDecorator_7",
    vueDecorator_8 = "vueDecorator_8",
    vueDecorator_9 = "vueDecorator_9",
    propDecorator_1 = "propDecorator_1",
    propDecorator_2 = "propDecorator_2",
    modelDecorator_1 = "modelDecorator_1",
    modelDecorator_2 = "modelDecorator_2",
    modelDecorator_3 = "modelDecorator_3",
    watchDecorator = "watchDecorator",
    provideDecorator_1 = "provideDecorator_1",
    provideDecorator_2 = "provideDecorator_2",
    injectDecorator_1 = "injectDecorator_1",
    injectDecorator_2 = "injectDecorator_2",
    emitDecorator = "emitDecorator",
    refDecorator = "refDecorator",
    componentDecorator = "componentDecorator",
    meteorFunction = "meteorFunction",
    meteorMethods_1 = "meteorMethods_1",
    meteorMethods_2 = "meteorMethods_2",
    meteorMethods_3 = "meteorMethods_3",
    vueRouter = "vueRouter",
    $EOF = "$EOF",
}
export type element = element_1 | element_2 | element_3;
export type element_1 = vueDecorator;
export type element_2 = meteorFunction;
export type element_3 = vueRouter;
export type vueDecorator = vueDecorator_1 | vueDecorator_2 | vueDecorator_3 | vueDecorator_4 | vueDecorator_5 | vueDecorator_6 | vueDecorator_7 | vueDecorator_8 | vueDecorator_9;
export type vueDecorator_1 = string;
export type vueDecorator_2 = propDecorator;
export type vueDecorator_3 = modelDecorator;
export type vueDecorator_4 = watchDecorator;
export type vueDecorator_5 = provideDecorator;
export type vueDecorator_6 = injectDecorator;
export type vueDecorator_7 = emitDecorator;
export type vueDecorator_8 = refDecorator;
export type vueDecorator_9 = componentDecorator;
export type propDecorator = propDecorator_1 | propDecorator_2;
export interface propDecorator_1 {
    kind: ASTKinds.propDecorator_1;
}
export interface propDecorator_2 {
    kind: ASTKinds.propDecorator_2;
}
export type modelDecorator = modelDecorator_1 | modelDecorator_2 | modelDecorator_3;
export interface modelDecorator_1 {
    kind: ASTKinds.modelDecorator_1;
}
export interface modelDecorator_2 {
    kind: ASTKinds.modelDecorator_2;
}
export type modelDecorator_3 = string;
export type watchDecorator = string;
export type provideDecorator = provideDecorator_1 | provideDecorator_2;
export interface provideDecorator_1 {
    kind: ASTKinds.provideDecorator_1;
}
export interface provideDecorator_2 {
    kind: ASTKinds.provideDecorator_2;
}
export type injectDecorator = injectDecorator_1 | injectDecorator_2;
export interface injectDecorator_1 {
    kind: ASTKinds.injectDecorator_1;
}
export interface injectDecorator_2 {
    kind: ASTKinds.injectDecorator_2;
}
export type emitDecorator = string;
export type refDecorator = string;
export type componentDecorator = string;
export interface meteorFunction {
    kind: ASTKinds.meteorFunction;
}
export type meteorMethods = meteorMethods_1 | meteorMethods_2 | meteorMethods_3;
export type meteorMethods_1 = string;
export type meteorMethods_2 = string;
export type meteorMethods_3 = string;
export interface vueRouter {
    kind: ASTKinds.vueRouter;
}
export class Parser {
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
    public matchelement($$dpth: number, $$cr?: ErrorTracker): Nullable<element> {
        return this.choice<element>([
            () => this.matchelement_1($$dpth + 1, $$cr),
            () => this.matchelement_2($$dpth + 1, $$cr),
            () => this.matchelement_3($$dpth + 1, $$cr),
        ]);
    }
    public matchelement_1($$dpth: number, $$cr?: ErrorTracker): Nullable<element_1> {
        return this.matchvueDecorator($$dpth + 1, $$cr);
    }
    public matchelement_2($$dpth: number, $$cr?: ErrorTracker): Nullable<element_2> {
        return this.matchmeteorFunction($$dpth + 1, $$cr);
    }
    public matchelement_3($$dpth: number, $$cr?: ErrorTracker): Nullable<element_3> {
        return this.matchvueRouter($$dpth + 1, $$cr);
    }
    public matchvueDecorator($$dpth: number, $$cr?: ErrorTracker): Nullable<vueDecorator> {
        return this.choice<vueDecorator>([
            () => this.matchvueDecorator_1($$dpth + 1, $$cr),
            () => this.matchvueDecorator_2($$dpth + 1, $$cr),
            () => this.matchvueDecorator_3($$dpth + 1, $$cr),
            () => this.matchvueDecorator_4($$dpth + 1, $$cr),
            () => this.matchvueDecorator_5($$dpth + 1, $$cr),
            () => this.matchvueDecorator_6($$dpth + 1, $$cr),
            () => this.matchvueDecorator_7($$dpth + 1, $$cr),
            () => this.matchvueDecorator_8($$dpth + 1, $$cr),
            () => this.matchvueDecorator_9($$dpth + 1, $$cr),
        ]);
    }
    public matchvueDecorator_1($$dpth: number, $$cr?: ErrorTracker): Nullable<vueDecorator_1> {
        return this.regexAccept(String.raw`(?:Mixins)`, $$dpth + 1, $$cr);
    }
    public matchvueDecorator_2($$dpth: number, $$cr?: ErrorTracker): Nullable<vueDecorator_2> {
        return this.matchpropDecorator($$dpth + 1, $$cr);
    }
    public matchvueDecorator_3($$dpth: number, $$cr?: ErrorTracker): Nullable<vueDecorator_3> {
        return this.matchmodelDecorator($$dpth + 1, $$cr);
    }
    public matchvueDecorator_4($$dpth: number, $$cr?: ErrorTracker): Nullable<vueDecorator_4> {
        return this.matchwatchDecorator($$dpth + 1, $$cr);
    }
    public matchvueDecorator_5($$dpth: number, $$cr?: ErrorTracker): Nullable<vueDecorator_5> {
        return this.matchprovideDecorator($$dpth + 1, $$cr);
    }
    public matchvueDecorator_6($$dpth: number, $$cr?: ErrorTracker): Nullable<vueDecorator_6> {
        return this.matchinjectDecorator($$dpth + 1, $$cr);
    }
    public matchvueDecorator_7($$dpth: number, $$cr?: ErrorTracker): Nullable<vueDecorator_7> {
        return this.matchemitDecorator($$dpth + 1, $$cr);
    }
    public matchvueDecorator_8($$dpth: number, $$cr?: ErrorTracker): Nullable<vueDecorator_8> {
        return this.matchrefDecorator($$dpth + 1, $$cr);
    }
    public matchvueDecorator_9($$dpth: number, $$cr?: ErrorTracker): Nullable<vueDecorator_9> {
        return this.matchcomponentDecorator($$dpth + 1, $$cr);
    }
    public matchpropDecorator($$dpth: number, $$cr?: ErrorTracker): Nullable<propDecorator> {
        return this.choice<propDecorator>([
            () => this.matchpropDecorator_1($$dpth + 1, $$cr),
            () => this.matchpropDecorator_2($$dpth + 1, $$cr),
        ]);
    }
    public matchpropDecorator_1($$dpth: number, $$cr?: ErrorTracker): Nullable<propDecorator_1> {
        return this.run<propDecorator_1>($$dpth,
            () => {
                let $$res: Nullable<propDecorator_1> = null;
                if (true
                    && this.regexAccept(String.raw`(?:@Prop)`, $$dpth + 1, $$cr) !== null
                    && this.match$EOF($$cr) !== null
                ) {
                    $$res = {kind: ASTKinds.propDecorator_1, };
                }
                return $$res;
            });
    }
    public matchpropDecorator_2($$dpth: number, $$cr?: ErrorTracker): Nullable<propDecorator_2> {
        return this.run<propDecorator_2>($$dpth,
            () => {
                let $$res: Nullable<propDecorator_2> = null;
                if (true
                    && this.regexAccept(String.raw`(?:@PropSync)`, $$dpth + 1, $$cr) !== null
                    && this.match$EOF($$cr) !== null
                ) {
                    $$res = {kind: ASTKinds.propDecorator_2, };
                }
                return $$res;
            });
    }
    public matchmodelDecorator($$dpth: number, $$cr?: ErrorTracker): Nullable<modelDecorator> {
        return this.choice<modelDecorator>([
            () => this.matchmodelDecorator_1($$dpth + 1, $$cr),
            () => this.matchmodelDecorator_2($$dpth + 1, $$cr),
            () => this.matchmodelDecorator_3($$dpth + 1, $$cr),
        ]);
    }
    public matchmodelDecorator_1($$dpth: number, $$cr?: ErrorTracker): Nullable<modelDecorator_1> {
        return this.run<modelDecorator_1>($$dpth,
            () => {
                let $$res: Nullable<modelDecorator_1> = null;
                if (true
                    && this.regexAccept(String.raw`(?:@Model)`, $$dpth + 1, $$cr) !== null
                    && this.match$EOF($$cr) !== null
                ) {
                    $$res = {kind: ASTKinds.modelDecorator_1, };
                }
                return $$res;
            });
    }
    public matchmodelDecorator_2($$dpth: number, $$cr?: ErrorTracker): Nullable<modelDecorator_2> {
        return this.run<modelDecorator_2>($$dpth,
            () => {
                let $$res: Nullable<modelDecorator_2> = null;
                if (true
                    && this.regexAccept(String.raw`(?:@ModelSync)`, $$dpth + 1, $$cr) !== null
                    && this.match$EOF($$cr) !== null
                ) {
                    $$res = {kind: ASTKinds.modelDecorator_2, };
                }
                return $$res;
            });
    }
    public matchmodelDecorator_3($$dpth: number, $$cr?: ErrorTracker): Nullable<modelDecorator_3> {
        return this.regexAccept(String.raw`(?:@VModel)`, $$dpth + 1, $$cr);
    }
    public matchwatchDecorator($$dpth: number, $$cr?: ErrorTracker): Nullable<watchDecorator> {
        return this.regexAccept(String.raw`(?:@Watch)`, $$dpth + 1, $$cr);
    }
    public matchprovideDecorator($$dpth: number, $$cr?: ErrorTracker): Nullable<provideDecorator> {
        return this.choice<provideDecorator>([
            () => this.matchprovideDecorator_1($$dpth + 1, $$cr),
            () => this.matchprovideDecorator_2($$dpth + 1, $$cr),
        ]);
    }
    public matchprovideDecorator_1($$dpth: number, $$cr?: ErrorTracker): Nullable<provideDecorator_1> {
        return this.run<provideDecorator_1>($$dpth,
            () => {
                let $$res: Nullable<provideDecorator_1> = null;
                if (true
                    && this.regexAccept(String.raw`(?:@Provide)`, $$dpth + 1, $$cr) !== null
                    && this.match$EOF($$cr) !== null
                ) {
                    $$res = {kind: ASTKinds.provideDecorator_1, };
                }
                return $$res;
            });
    }
    public matchprovideDecorator_2($$dpth: number, $$cr?: ErrorTracker): Nullable<provideDecorator_2> {
        return this.run<provideDecorator_2>($$dpth,
            () => {
                let $$res: Nullable<provideDecorator_2> = null;
                if (true
                    && this.regexAccept(String.raw`(?:@ProvideReactive)`, $$dpth + 1, $$cr) !== null
                    && this.match$EOF($$cr) !== null
                ) {
                    $$res = {kind: ASTKinds.provideDecorator_2, };
                }
                return $$res;
            });
    }
    public matchinjectDecorator($$dpth: number, $$cr?: ErrorTracker): Nullable<injectDecorator> {
        return this.choice<injectDecorator>([
            () => this.matchinjectDecorator_1($$dpth + 1, $$cr),
            () => this.matchinjectDecorator_2($$dpth + 1, $$cr),
        ]);
    }
    public matchinjectDecorator_1($$dpth: number, $$cr?: ErrorTracker): Nullable<injectDecorator_1> {
        return this.run<injectDecorator_1>($$dpth,
            () => {
                let $$res: Nullable<injectDecorator_1> = null;
                if (true
                    && this.regexAccept(String.raw`(?:@Inject)`, $$dpth + 1, $$cr) !== null
                    && this.match$EOF($$cr) !== null
                ) {
                    $$res = {kind: ASTKinds.injectDecorator_1, };
                }
                return $$res;
            });
    }
    public matchinjectDecorator_2($$dpth: number, $$cr?: ErrorTracker): Nullable<injectDecorator_2> {
        return this.run<injectDecorator_2>($$dpth,
            () => {
                let $$res: Nullable<injectDecorator_2> = null;
                if (true
                    && this.regexAccept(String.raw`(?:@InjectReactive)`, $$dpth + 1, $$cr) !== null
                    && this.match$EOF($$cr) !== null
                ) {
                    $$res = {kind: ASTKinds.injectDecorator_2, };
                }
                return $$res;
            });
    }
    public matchemitDecorator($$dpth: number, $$cr?: ErrorTracker): Nullable<emitDecorator> {
        return this.regexAccept(String.raw`(?:@Emit)`, $$dpth + 1, $$cr);
    }
    public matchrefDecorator($$dpth: number, $$cr?: ErrorTracker): Nullable<refDecorator> {
        return this.regexAccept(String.raw`(?:@Ref)`, $$dpth + 1, $$cr);
    }
    public matchcomponentDecorator($$dpth: number, $$cr?: ErrorTracker): Nullable<componentDecorator> {
        return this.regexAccept(String.raw`(?:@Component)`, $$dpth + 1, $$cr);
    }
    public matchmeteorFunction($$dpth: number, $$cr?: ErrorTracker): Nullable<meteorFunction> {
        return this.run<meteorFunction>($$dpth,
            () => {
                let $$res: Nullable<meteorFunction> = null;
                if (true
                    && this.regexAccept(String.raw`(?:Meteor[.])`, $$dpth + 1, $$cr) !== null
                    && this.matchmeteorMethods($$dpth + 1, $$cr) !== null
                ) {
                    $$res = {kind: ASTKinds.meteorFunction, };
                }
                return $$res;
            });
    }
    public matchmeteorMethods($$dpth: number, $$cr?: ErrorTracker): Nullable<meteorMethods> {
        return this.choice<meteorMethods>([
            () => this.matchmeteorMethods_1($$dpth + 1, $$cr),
            () => this.matchmeteorMethods_2($$dpth + 1, $$cr),
            () => this.matchmeteorMethods_3($$dpth + 1, $$cr),
        ]);
    }
    public matchmeteorMethods_1($$dpth: number, $$cr?: ErrorTracker): Nullable<meteorMethods_1> {
        return this.regexAccept(String.raw`(?:startup)`, $$dpth + 1, $$cr);
    }
    public matchmeteorMethods_2($$dpth: number, $$cr?: ErrorTracker): Nullable<meteorMethods_2> {
        return this.regexAccept(String.raw`(?:methods)`, $$dpth + 1, $$cr);
    }
    public matchmeteorMethods_3($$dpth: number, $$cr?: ErrorTracker): Nullable<meteorMethods_3> {
        return this.regexAccept(String.raw`(?:publish)`, $$dpth + 1, $$cr);
    }
    public matchvueRouter($$dpth: number, $$cr?: ErrorTracker): Nullable<vueRouter> {
        return this.run<vueRouter>($$dpth,
            () => {
                let $$res: Nullable<vueRouter> = null;
                if (true
                    && this.regexAccept(String.raw`(?:new VueRouter)`, $$dpth + 1, $$cr) !== null
                    && this.match$EOF($$cr) !== null
                ) {
                    $$res = {kind: ASTKinds.vueRouter, };
                }
                return $$res;
            });
    }
    public test(): boolean {
        const mrk = this.mark();
        const res = this.matchelement(0);
        const ans = res !== null;
        this.reset(mrk);
        return ans;
    }
    public parse(): ParseResult {
        const mrk = this.mark();
        const res = this.matchelement(0);
        if (res)
            return {ast: res, errs: []};
        this.reset(mrk);
        const rec = new ErrorTracker();
        this.clearMemos();
        this.matchelement(0, rec);
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
export function parse(s: string): ParseResult {
    const p = new Parser(s);
    return p.parse();
}
export interface ParseResult {
    ast: Nullable<element>;
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