import {
    ajaxGet,
    ajaxPost,
    ajaxDel,
    ajax,
} from './index'

const getList = function(page,limit){
    return ajaxGet(`/mx_problem_feedback/api/v2/appInit?page=${page}&limit=${limit}`)
}
const postData = function(obj){
    return ajaxPost(`/mx_problem_feedback/api/v2/createFeedback`,obj)
}


export{getList,postData}
