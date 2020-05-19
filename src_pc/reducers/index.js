import { combineReducers } from 'redux';
import { marketingAdInfoReducer } from "mapp_common/marketing/reducer";
import { refundListReducer } from "pcPages/refundManagement/reducer";
<<<<<<< HEAD
import { toEvaluateReducer } from "pcPages/batchEvaluations/reducer";
=======
import toEvaluateReducer from "pcPages/batchEvaluations/reducer";
>>>>>>> 94088b6045bdec216fa76a5dbf4681a91bcb242d

 /** 
  * 合并  reducer
  * 在自己的component文件夹中封装reducer，在这里导入即可
 */
export default combineReducers({
    marketingAdInfoReducer,
    refundListReducer,
    toEvaluateReducer
});

