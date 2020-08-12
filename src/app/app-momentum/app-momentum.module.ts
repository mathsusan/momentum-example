import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  SideBarModule,
  SideBarBodyModule,
  SidebarNavModule,
  SidebarNavItemModule,
  SidebarHeaderModule,
  SidebarFooterModule,
  ButtonModule,
  InputModule,
  IconModule,
  ListModule,
  ListItemModule,
  TopbarModule,
  ModalModule,
  DrawerModule,
  BadgeModule,
  PopoverModule,
  TooltipModule,
  SpinnerModule
} from '@momentum-ui/angular';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SideBarModule,
    SideBarBodyModule,
    SidebarNavModule,
    SidebarNavItemModule,
    SidebarHeaderModule,
    SidebarFooterModule,
    ButtonModule,
    IconModule,
    ListModule,
    ListItemModule,
    TopbarModule,
    ModalModule,
    InputModule,
    DrawerModule,
    BadgeModule,
    PopoverModule,
    TooltipModule,
    SpinnerModule
  ],
  exports: [
    SideBarModule,
    SideBarBodyModule,
    SidebarNavModule,
    SidebarNavItemModule,
    SidebarHeaderModule,
    SidebarFooterModule,
    ButtonModule,
    IconModule,
    ListModule,
    ListItemModule,
    TopbarModule,
    ModalModule,
    InputModule,
    DrawerModule,
    BadgeModule,
    PopoverModule,
    TooltipModule,
    SpinnerModule
  ]
})
export class AppMomentumModule { }
