
// layouts
import { DefaultLayoutComponent } from '../../layout/default/default.component';

// components
import { HeaderLayoutshareComponent } from '../../layout/shared/header/header.component';
import { SharedModule } from '../app-shared';
import { SliderLayoutshareComponent } from '../../layout/shared/slider';
import { MenuLayoutComponent } from '@layouts/menu_layout/menu.component';

export const AppLayout = {
    modules: [
        SharedModule
    ],
    components: [
        DefaultLayoutComponent,
        MenuLayoutComponent
    ],
    header_components: [
        HeaderLayoutshareComponent,
        SliderLayoutshareComponent
    ]
};
