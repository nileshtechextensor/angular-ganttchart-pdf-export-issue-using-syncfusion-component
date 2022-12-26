import { Component,ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { Gantt } from '@syncfusion/ej2-gantt';
import { GanttComponent, ToolbarItem, SelectionSettingsModel, PdfExportProperties, ZoomTimelineSettings } from '@syncfusion/ej2-angular-gantt';
import { ClickEventArgs } from '@syncfusion/ej2-navigations/src/toolbar/toolbar';
import { editingData, editingResources } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class AppComponent {

  // public data: object[] | undefined;
  // public taskSettings: object  | undefined;
  // public toolbar: ToolbarItem[]  | undefined;
  // @ViewChild('gantt', {static: true})
  // public ganttChart: GanttComponent  | undefined;
  // public ngOnInit(): void {
  //     this.data = editingData;
  //     this.taskSettings = {
  //         id: 'TaskID',
  //         name: 'TaskName',
  //         startDate: 'StartDate',
  //         duration: 'Duration',
  //         progress: 'Progress',
  //         child: 'subtasks'
  //     };
  //     this.toolbar =  ['PdfExport'];
  // }
  // public toolbarClick(args: ClickEventArgs): void {
  //         if (args.item.id === 'ganttDefault_pdfexport') {
  //             this.ganttChart!.pdfExport({
  //               pageSize:'A1',
  //               fileName:'A1.pdf'
  //             });
  //         }
  // };
  @ViewChild('ganttExcel')
    public ganttObj: GanttComponent | undefined;
    public data: object[] | undefined;
    public resources: object[] | undefined;
    public resourceFields: object | undefined ;
    public taskSettings: object | undefined;
    public timelineSettings: object | undefined;
    public gridLines: string | undefined;
    public labelSettings: object | undefined;
    public projectStartDate: Date | undefined;
    public projectEndDate: Date | undefined;
    public toolbar: string[] | undefined;
    public splitterSettings: object | undefined;
    public columns: object[] | undefined;
    public ngOnInit(): void {
        this.data = editingData;
        this.taskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            dependency: 'Predecessor',
            child: 'subtasks',
            resourceInfo: 'resources'
        };
        
        this.resourceFields = {
            id: 'resourceId',
            name: 'resourceName'
        };
        this.toolbar = ['ExcelExport', 'CsvExport', 'PdfExport','ZoomIn', 'ZoomOut', 'ZoomToFit'];
        this.timelineSettings = {
            topTier: {
                unit: 'Week',
                format: 'MMM dd, y',
            },
            bottomTier: {
                unit: 'Day',
                count: 1
            },
        };
        this.gridLines = 'Both';
        this.labelSettings = {
            leftLabel: 'TaskName',
            rightLabel: 'resources'
        };
        this.projectStartDate = new Date('03/25/2019');
        this.projectEndDate = new Date('07/28/2019');
        this.resources = editingResources;
        this.splitterSettings = {
            columnIndex: 2
        };
        this.columns = [
            { field: 'TaskID', width: 80 },
            { field: 'TaskName', width: 250 },
            { field: 'StartDate' },
            { field: 'EndDate' },
            { field: 'Duration' },
            { field: 'Predecessor' },
            { field: 'resources' },
            { field: 'Progress' }
        ];
    }
    toolbarClick(args?: ClickEventArgs): void {
        debugger;
        if (args!.item.id === 'GanttExport_excelexport') {
            this.ganttObj!.excelExport();
        }
        else if (args!.item.id === "GanttExport_csvexport") {
            this.ganttObj!.csvExport();
        }
        else if (args!.item.id === "GanttExport_pdfexport") {
            let pageParams : PdfExportProperties  = {
                pageOrientation:'Landscape',
                pageSize:'B0',
                fileName:'A-1.pdf',
            }
            this.ganttObj!.pdfExport(pageParams);
        }
    }

}
