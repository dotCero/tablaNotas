export class GradingScale {
    get gradeApprove(): number {
        return this._gradeApprove;
    }
    get scale(): Array<number> {
        return this._scale;
    }
    private readonly _gradeMax: number;
    private readonly _gradeMin: number;
    private readonly _gradeApprove: number;
    private readonly _requirement: number;
    private readonly _scoreMax: number;
    private _scale: Array<number> = [];

    constructor(gradeMax: number, gradeMin: number, gradeApprove: number, requirement: number, scoreMax: number) {
        this._gradeMax = gradeMax;
        this._gradeMin = gradeMin;
        this._gradeApprove = gradeApprove;
        this._requirement = requirement;
        this._scoreMax = scoreMax;
        this.calculateScale();
    }


    private calculateScale () {
        const step: number = 1;
        let stepScore: number = 0;
        let currentGrade;
        const requirementParse = this._requirement/100;
        const factorScore = requirementParse*this._scoreMax
        while (stepScore <= this._scoreMax){
            if (stepScore < factorScore) {
                currentGrade = (this._gradeApprove - this._gradeMin) * (stepScore/factorScore) + this._gradeMin;
            }else{
                currentGrade = (this._gradeMax - this._gradeApprove) * ((stepScore - (requirementParse*this._scoreMax))/(this._scoreMax*(1-requirementParse))) + this._gradeApprove;
            }
            this._scale.push(parseFloat(currentGrade.toPrecision(2)));
            stepScore = stepScore + step;
        }
    }
}

