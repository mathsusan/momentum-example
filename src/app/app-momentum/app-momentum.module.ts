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
  TooltipModule
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
    TooltipModule
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
    TooltipModule
  ]
})
export class AppMomentumModule { }
