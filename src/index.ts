/// <reference types="@types/google.maps" />
import { Company } from './company';
import { User } from './User';
import { CustomMap } from './CustomMap';

const customMap = new CustomMap('map');
const company1 = new Company();
const user1 = new User();
customMap.addMarker(user1);
customMap.addMarker(company1);
