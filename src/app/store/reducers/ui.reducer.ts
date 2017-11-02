import {ListActionsService} from '../actions/list-actions.service';

export function uiReducer(ui = {}, action) {

  if (action.type === ListActionsService.FETCH_ITEMS) {
    return {...ui, pending: true};
  }

  if (action.type === 'ITEMS_FETCHED') {
    return {...ui, pending: false};
  }

  return ui;
}