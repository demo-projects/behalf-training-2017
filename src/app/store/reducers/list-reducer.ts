import {ListActionsService} from '../actions/list-actions.service';

export function listReducer(list = [], action) {

  switch (action.type) {

    case ListActionsService.ADD_ITEM:
      return [...list, action.payload];

    case ListActionsService.RESET_ITEMS:
      return [];

    case 'ITEMS_FETCHED':
      return [...list, ...action.payload]

    default:
      return list;
  }

}
