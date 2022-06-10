import { CommonModule } from "@angular/common"
import { HttpClient } from "@angular/common/http"
import { FormsModule } from "@angular/forms"
import { MockProvider } from 'ng-mocks';

export class BaseTestBed {
    declarations: any[] = []
    imports: any[] = [CommonModule, FormsModule]
    providers: any[] = [MockProvider(HttpClient)]
}

export const CapcodTestBed = new BaseTestBed();
