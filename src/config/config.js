export const TYPE = {
  JG:"14", //监管方
  ZB:"11",//主办方
  CB:"12",//承办方
  GY:"13",//供应方
  YY:"15",//运营方
}

export function routerList (data) {

  let list = ['/','/home','/details','/map','/create','/suggestion','/mainstay','/increase']

	data.forEach(v=>{
    if(v.name === "活动管理"){
      list.push('/actions')
      list.push('/venue')
    }else if(v.name === "部门管理"){
      list.push('/organization')
    } else if(v.name === "用户管理"){
      list.push('/user')
    }else if(v.name === "报警管理"){
      list.push('/report')
    } else if(v.name === "电子围栏"){
      list.push('/fence')
    } else if(v.name === "设备管理"){
      list.push('/device')
    } else if(v.name === "信息发布"){
      list.push('/information')
    } else if(v.name === "统计分析"){
      list.push('/statistics')
    }
  })
    
  return list
}

//权限
export function activeEnableEditor(userType){
  if(userType === TYPE.ZB || userType === TYPE.YY){
    return true
  }else{
    return false
  }
}