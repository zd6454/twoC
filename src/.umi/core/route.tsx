// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import React from 'react';

export async function getRoutes() {
  const routes = {"1":{"path":"/user","layout":false,"id":"1"},"2":{"name":"login","path":"/user/login","parentId":"1","id":"2"},"3":{"path":"/welcome","name":"welcome","icon":"smile","parentId":"ant-design-pro-layout","id":"3"},"4":{"path":"/connect","name":"connect","icon":"smile","parentId":"ant-design-pro-layout","id":"4"},"5":{"path":"/co2","name":"co2","icon":"smile","parentId":"ant-design-pro-layout","id":"5"},"6":{"path":"/co2/create","name":"create","parentId":"5","id":"6"},"7":{"path":"/co2/search","name":"search","parentId":"5","id":"7"},"8":{"path":"/co2/records","name":"records","parentId":"5","id":"8"},"9":{"path":"/supplier","name":"supplier","icon":"smile","parentId":"ant-design-pro-layout","id":"9"},"10":{"path":"/supplier/create","name":"create","canAdmin":"smic","parentId":"9","id":"10"},"11":{"path":"/supplier/index","name":"index","parentId":"9","id":"11"},"12":{"path":"/digit","name":"digit","icon":"smile","parentId":"ant-design-pro-layout","id":"12"},"13":{"path":"/model","name":"model","icon":"smile","parentId":"ant-design-pro-layout","id":"13"},"14":{"path":"/opera","name":"opera","icon":"smile","parentId":"ant-design-pro-layout","id":"14"},"15":{"path":"/opera/create","name":"create","parentId":"14","id":"15"},"16":{"path":"/opera/index","name":"index","parentId":"14","id":"16"},"17":{"path":"/opera/jc","name":"jc","parentId":"14","id":"17"},"18":{"path":"/hnor","name":"hnor","icon":"smile","parentId":"ant-design-pro-layout","id":"18"},"19":{"path":"/hnor/teacher","name":"teacher","parentId":"18","id":"19"},"20":{"path":"/hnor/achive","name":"achive","parentId":"18","id":"20"},"21":{"path":"/hnor/paper","name":"paper","parentId":"18","id":"21"},"22":{"path":"/hnor/meeting","name":"meeting","parentId":"18","id":"22"},"23":{"path":"/hnor/photo","name":"photo","parentId":"18","id":"23"},"24":{"path":"/hnor/file","name":"file","parentId":"18","id":"24"},"25":{"path":"/","redirect":"/welcome","parentId":"ant-design-pro-layout","id":"25"},"26":{"path":"*","layout":false,"id":"26"},"ant-design-pro-layout":{"id":"ant-design-pro-layout","path":"/","isLayout":true},"umi/plugin/openapi":{"path":"/umi/plugin/openapi","id":"umi/plugin/openapi"}} as const;
  return {
    routes,
    routeComponents: {
'1': React.lazy(() => import( './EmptyRoute')),
'2': React.lazy(() => import(/* webpackChunkName: "p__User__Login__index" */'@/pages/User/Login/index.tsx')),
'3': React.lazy(() => import(/* webpackChunkName: "p__Welcome" */'@/pages/Welcome.tsx')),
'4': React.lazy(() => import(/* webpackChunkName: "p__Connect__index" */'@/pages/Connect/index.jsx')),
'5': React.lazy(() => import( './EmptyRoute')),
'6': React.lazy(() => import(/* webpackChunkName: "p__Co2__Create" */'@/pages/Co2/Create.jsx')),
'7': React.lazy(() => import(/* webpackChunkName: "p__Co2__Search" */'@/pages/Co2/Search.jsx')),
'8': React.lazy(() => import(/* webpackChunkName: "p__Co2__Records" */'@/pages/Co2/Records.jsx')),
'9': React.lazy(() => import( './EmptyRoute')),
'10': React.lazy(() => import(/* webpackChunkName: "p__Supplier__Create" */'@/pages/Supplier/Create.jsx')),
'11': React.lazy(() => import(/* webpackChunkName: "p__Supplier__index" */'@/pages/Supplier/index.jsx')),
'12': React.lazy(() => import(/* webpackChunkName: "p__Digit__index" */'@/pages/Digit/index.jsx')),
'13': React.lazy(() => import(/* webpackChunkName: "p__Model__index" */'@/pages/Model/index.jsx')),
'14': React.lazy(() => import( './EmptyRoute')),
'15': React.lazy(() => import(/* webpackChunkName: "p__Opera__Create" */'@/pages/Opera/Create.jsx')),
'16': React.lazy(() => import(/* webpackChunkName: "p__Opera__index" */'@/pages/Opera/index.jsx')),
'17': React.lazy(() => import(/* webpackChunkName: "p__Opera__JTuopu" */'@/pages/Opera/JTuopu.jsx')),
'18': React.lazy(() => import( './EmptyRoute')),
'19': React.lazy(() => import(/* webpackChunkName: "p__Hnor__Teacher" */'@/pages/Hnor/Teacher.jsx')),
'20': React.lazy(() => import(/* webpackChunkName: "p__Hnor__Achive" */'@/pages/Hnor/Achive.jsx')),
'21': React.lazy(() => import(/* webpackChunkName: "p__Hnor__Paper" */'@/pages/Hnor/Paper.jsx')),
'22': React.lazy(() => import(/* webpackChunkName: "p__Hnor__Meeting" */'@/pages/Hnor/Meeting.jsx')),
'23': React.lazy(() => import(/* webpackChunkName: "p__Hnor__Photo" */'@/pages/Hnor/Photo.jsx')),
'24': React.lazy(() => import(/* webpackChunkName: "p__Hnor__File__index" */'@/pages/Hnor/File/index.jsx')),
'25': React.lazy(() => import( './EmptyRoute')),
'26': React.lazy(() => import(/* webpackChunkName: "p__404" */'@/pages/404.tsx')),
'ant-design-pro-layout': React.lazy(() => import(/* webpackChunkName: "umi__plugin-layout__Layout" */'D:/forWorks/外包/双碳系统/system2/twoC/src/.umi/plugin-layout/Layout.tsx')),
'umi/plugin/openapi': React.lazy(() => import(/* webpackChunkName: "umi__plugin-openapi__openapi" */'D:/forWorks/外包/双碳系统/system2/twoC/src/.umi/plugin-openapi/openapi.tsx')),
},
  };
}
