import { combineReducers } from 'redux';
import { marketingAdInfoReducer } from "mapp_common/marketing/reducer";
import { refundListReducer } from "pcPages/refundManagement/reducer";
import { toEvaluateReducer } from "pcPages/batchEvaluations/reducer";

 /** 
  * 合并  reducer
  * 在自己的component文件夹中封装reducer，在这里导入即可
 */
export default combineReducers({
    marketingAdInfoReducer,
    refundListReducer,
    toEvaluateReducer
});

