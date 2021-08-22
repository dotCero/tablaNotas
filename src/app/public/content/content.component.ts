import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupName} from "@angular/forms";
import {GradingScale} from "../../model/grading-scale";

@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
    private inputClassConfig: Array<string> = ['is-small', 'is-info'];
    public qualificationData: FormGroup = this.formBuilder.group(
        {
            gradeMax: [7],
            gradeMin: [1],
            gradeApprove: [4],
            requirement: [60],
            scoreMax: [10]
        }
    );
    public gradingScale!: GradingScale;

    constructor(
        private formBuilder: FormBuilder
    ) { }

    ngOnInit(): void {
        this.renderInputs();
        this.gradingScale = this.gradingScale = new GradingScale(
            this.qualificationData.value.gradeMax,
            this.qualificationData.value.gradeMin,
            this.qualificationData.value.gradeApprove,
            this.qualificationData.value.requirement,
            this.qualificationData.value.scoreMax
        );
    }

    private ngAfterViewChecked() {
        this.drawTable();
    }

    private renderInputs() {
        const inputs = document.querySelectorAll("input");
        inputs.forEach(input => {
            this.inputClassConfig.forEach(_class => {
                input.classList.add(_class);
            });
        });
    }

    public submit() {
        this.gradingScale = new GradingScale(
            this.qualificationData.value.gradeMax,
            this.qualificationData.value.gradeMin,
            this.qualificationData.value.gradeApprove,
            this.qualificationData.value.requirement,
            this.qualificationData.value.scoreMax
        );
    }

    private drawTable() {
        const tbody_gradingScale: HTMLElement|null = document.querySelector('tbody.gradingScale');
        tbody_gradingScale!.innerHTML = '';
        this.gradingScale.scale.forEach((grade: number, index: number) => {
            const tr: HTMLTableRowElement = document.createElement('tr');
            tr.insertCell(0).innerHTML = index.toString();
            tr.insertCell(1).innerHTML = grade.toString();
            tr.classList.add('has-text-info');
            if (grade < this.gradingScale.gradeApprove) {
                tr.cells[1].classList.add('has-text-danger');
            }else{
                tr.cells[1].classList.add('has-text-link');
            }
            tbody_gradingScale!.appendChild(tr);
        });
    }
}
