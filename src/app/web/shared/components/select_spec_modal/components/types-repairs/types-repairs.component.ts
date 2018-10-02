import { Component, OnInit } from "@angular/core";
import { DataTemplateService } from "../shared/providers/count-templates.service";

@Component({
    selector: 'app-types-repairs',
    templateUrl: './types-repairs.component.html',
    styleUrls: ['./types-repairs.component.scss']
})
export class TypesRepairsComponent implements OnInit {

    public title = 'Виды уборки';
    public items = [
        {
            tarif: {
                liveroom: [
                    '* обеспыливание всех поверхностей',
                    '* обеспыливание стен и потолков (включая осветительные приборы)',
                    '* чистка фурнитуры, двери и дверные короба',
                    '* мойка полов и плинтусов',
                    '* мойка подоконников и радиаторов',
                    '* удаление мелкого строительного мусора (вывоз мусора не входит в стоимость работ)',
                    '* влажная уборка всех наружных и внутренних поверхностей корпусной мебели (пустых)',
                    '* чиста текстильной обивки мебели с использованием пылесоса'
                ],
                bathroom: [
                    '* очистка радиаторов отопления и труб',
                    '* чистка и дезинсекция сан.техники',
                    '* мойка полов и плинтусов',
                    '* стены и потолки'
                ]
            },
            untarif: [
                '* химичиская чистка ковров и мягкой мебели',
                '* мойка осветительных приборов на высоте более 4-ч метров от уровня пола',
                '* мойка окон, ветражей, балконов'
            ]
        }
    ];
    public repairs = [
        {
            id: 0,
            name: 'Поддерживающая'
        },
        {
            id: 100,
            name: 'Генеральная'
        },
        {
            id: 200,
            name: 'После ремонта'
        },
        {
            id: 300,
            name: 'Окна / Балконы'
        },
        {
            id: 400,
            name: 'Химчистка'
        },
    ];
    public data = {
        count: 0,
        repair: 0
    };

    constructor(private dataTemplate: DataTemplateService) {

    }

    ngOnInit() {
        console.log('first block');
        this.dataTemplate.changeTempate(this.data);
    }

    next(data: any) {
        this.data['count'] = this.data['repair'];
        this.data['count']++;
        console.log(this.data);
        this.dataTemplate.changeTempate(this.data);
    }

    select(id: number) {
        console.log(id, 'select repair');
        this.data['repair'] = id;
        this.dataTemplate.changeTempate(this.data);
    }

}