(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2b8a"],{"30d9":function(e,t,n){},4974:function(e,t,n){"use strict";var a=n("bbb3"),s=n.n(a);s.a},6639:function(e,t,n){"use strict";n.d(t,"e",function(){return s}),n.d(t,"b",function(){return o}),n.d(t,"f",function(){return i}),n.d(t,"d",function(){return r}),n.d(t,"c",function(){return l}),n.d(t,"a",function(){return c}),n.d(t,"g",function(){return d});var a=n("66df"),s=function(e){return a["a"].request({url:"rbac/menu/list",method:"post",data:e})},o=function(e){return a["a"].request({url:"rbac/menu/create",method:"post",data:e})},i=function(e){return a["a"].request({url:"rbac/menu/edit/"+e.guid,method:"get"})},r=function(e){return a["a"].request({url:"rbac/menu/edit",method:"post",data:e})},l=function(e){return a["a"].request({url:"rbac/menu/delete/"+e,method:"get"})},c=function(e){return a["a"].request({url:"rbac/menu/batch",method:"get",params:e})},d=function(e){var t="rbac/menu/tree";return null!=e&&(t+="/"+e),a["a"].request({url:t,method:"get"})}},a8ba:function(e,t,n){"use strict";n.d(t,"e",function(){return s}),n.d(t,"b",function(){return o}),n.d(t,"f",function(){return i}),n.d(t,"d",function(){return r}),n.d(t,"c",function(){return l}),n.d(t,"a",function(){return c}),n.d(t,"g",function(){return d});var a=n("66df"),s=function(e){return a["a"].request({url:"rbac/permission/list",method:"post",data:e})},o=function(e){return a["a"].request({url:"rbac/permission/create",method:"post",data:e})},i=function(e){return a["a"].request({url:"rbac/permission/edit/"+e.code,method:"get"})},r=function(e){return a["a"].request({url:"rbac/permission/edit",method:"post",data:e})},l=function(e){return a["a"].request({url:"rbac/permission/delete/"+e,method:"get"})},c=function(e){return a["a"].request({url:"rbac/permission/batch",method:"get",params:e})},d=function(e){return a["a"].request({url:"rbac/permission/permission_tree/"+e,method:"get"})}},bbb3:function(e,t,n){},fa69:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"dnc-table-wrap"},[e._t("search",[e.searchable&&"top"===e.searchPlace?n("div",{staticClass:"search-con search-con-top"},[n("Select",{staticClass:"search-col",model:{value:e.searchKey,callback:function(t){e.searchKey=t},expression:"searchKey"}},e._l(e.columns,function(t){return"handle"!==t.key?n("Option",{key:"search-col-"+t.key,attrs:{value:t.key}},[e._v(e._s(t.title))]):e._e()})),n("Input",{staticClass:"search-input",attrs:{clearable:"",placeholder:"输入关键字搜索"},on:{"on-change":e.handleClear},model:{value:e.searchValue,callback:function(t){e.searchValue=t},expression:"searchValue"}}),n("Button",{staticClass:"search-btn",attrs:{type:"primary"},on:{click:e.handleSearch}},[n("Icon",{attrs:{type:"search"}}),e._v("  搜索")],1)],1):e._e()]),n("Table",{ref:"tablesMain",attrs:{data:e.insideTableData,columns:e.insideColumns,stripe:e.stripe,border:e.border,"show-header":e.showHeader,width:e.width,height:e.height,loading:e.loading,"disabled-hover":e.disabledHover,"highlight-row":e.highlightRow,"row-class-name":e.rowClassName,size:e.size,"no-data-text":e.noDataText,"no-filtered-data-text":e.noFilteredDataText},on:{"on-current-change":e.onCurrentChange,"on-select":e.onSelect,"on-select-cancel":e.onSelectCancel,"on-select-all":e.onSelectAll,"on-selection-change":e.onSelectionChange,"on-sort-change":e.onSortChange,"on-filter-change":e.onFilterChange,"on-row-click":e.onRowClick,"on-row-dblclick":e.onRowDblclick,"on-expand":e.onExpand}},[e._t("header",null,{slot:"header"}),e._t("footer",null,{slot:"footer"}),e._t("loading",null,{slot:"loading"})],2),n("Page",{attrs:{total:e.totalCount,"page-size":e.pageSize,size:"small","show-elevator":"","show-sizer":"","show-total":"","page-size-opts":e.pageSizeOpts},on:{"on-change":e.onPageChanged,"on-page-size-change":e.onPageSizeChanged}}),n("div",{directives:[{name:"show",rawName:"v-show",value:e.showRefreshButton,expression:"showRefreshButton"}],staticClass:"dnc-table-refresh-btn"},[n("Button",{attrs:{size:"small",shape:"circle",icon:"md-refresh",title:"刷新"},on:{click:e.onRefresh}})],1),e.searchable&&"bottom"===e.searchPlace?n("div",{staticClass:"search-con search-con-top"},[n("Select",{staticClass:"search-col",model:{value:e.searchKey,callback:function(t){e.searchKey=t},expression:"searchKey"}},e._l(e.columns,function(t){return"handle"!==t.key?n("Option",{key:"search-col-"+t.key,attrs:{value:t.key}},[e._v(e._s(t.title))]):e._e()})),n("Input",{staticClass:"search-input",attrs:{placeholder:"输入关键字搜索"},model:{value:e.searchValue,callback:function(t){e.searchValue=t},expression:"searchValue"}}),n("Button",{staticClass:"search-btn",attrs:{type:"primary"}},[n("Icon",{attrs:{type:"search"}}),e._v("  搜索")],1)],1):e._e(),n("a",{staticStyle:{display:"none",width:"0px",height:"0px"},attrs:{id:"hrefToExportTable"}})],2)},s=[],o=(n("ac6a"),n("f751"),n("c5f6"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tables-edit-outer"},[e.isEditting?n("div",{staticClass:"tables-editting-con"},[n("Input",{staticClass:"tables-edit-input",attrs:{value:e.value},on:{input:e.handleInput}}),n("Button",{staticStyle:{padding:"6px 4px"},attrs:{type:"text"},on:{click:e.saveEdit}},[n("Icon",{attrs:{type:"md-checkmark"}})],1),n("Button",{staticStyle:{padding:"6px 4px"},attrs:{type:"text"},on:{click:e.canceltEdit}},[n("Icon",{attrs:{type:"md-close"}})],1)],1):n("div",{staticClass:"tables-edit-con"},[n("span",{staticClass:"value-con"},[e._v(e._s(e.value))]),e.editable?n("Button",{staticClass:"tables-edit-btn",staticStyle:{padding:"2px 4px"},attrs:{type:"text"},on:{click:e.startEdit}},[n("Icon",{attrs:{type:"md-create"}})],1):e._e()],1)])}),i=[],r={name:"TablesEdit",props:{value:[String,Number],edittingCellId:String,params:Object,editable:Boolean},computed:{isEditting:function(){return this.edittingCellId==="editting-".concat(this.params.index,"-").concat(this.params.column.key)}},methods:{handleInput:function(e){this.$emit("input",e)},startEdit:function(){this.$emit("on-start-edit",this.params)},saveEdit:function(){this.$emit("on-save-edit",this.params)},canceltEdit:function(){this.$emit("on-cancel-edit",this.params)}}},l=r,c=(n("4974"),n("2877")),d=Object(c["a"])(l,o,i,!1,null,null,null);d.options.__file="edit.vue";var u=d.exports,h={delete:function(e,t,n){return e("Poptip",{props:{confirm:!0,title:"你确定要删除吗?"},on:{"on-ok":function(){n.$emit("on-delete",t),n.$emit("input",t.tableData.filter(function(e,n){return n!==t.row.initRowIndex}))}}},[e("Button",{props:{type:"text",ghost:!0}},[e("Icon",{props:{type:"md-trash",size:18,color:"#000000"}})])])}},m=h,p=(n("30d9"),{name:"Tables",props:{value:{type:Array,default:function(){return[]}},columns:{type:Array,default:function(){return[]}},size:String,width:{type:[Number,String]},height:{type:[Number,String]},stripe:{type:Boolean,default:!1},border:{type:Boolean,default:!0},showHeader:{type:Boolean,default:!0},highlightRow:{type:Boolean,default:!1},rowClassName:{type:Function,default:function(){return""}},context:{type:Object},noDataText:{type:String},noFilteredDataText:{type:String},disabledHover:{type:Boolean},loading:{type:Boolean,default:!1},editable:{type:Boolean,default:!1},searchable:{type:Boolean,default:!1},searchPlace:{type:String,default:"top"},totalCount:{type:Number,default:0},pageSize:{type:Number,default:20},showRefreshButton:{type:Boolean,default:!1},pageSizeOpts:{type:Array,default:function(){return[5,10,20,30,40,50,100,200,500]}}},data:function(){return{insideColumns:[],insideTableData:[],edittingCellId:"",edittingText:"",searchValue:"",searchKey:""}},methods:{suportEdit:function(e,t){var n=this;return e.render=function(e,t){return e(u,{props:{params:t,value:n.insideTableData[t.index][t.column.key],edittingCellId:n.edittingCellId,editable:n.editable},on:{input:function(e){n.edittingText=e},"on-start-edit":function(e){n.edittingCellId="editting-".concat(e.index,"-").concat(e.column.key),n.$emit("on-start-edit",e)},"on-cancel-edit":function(e){n.edittingCellId="",n.$emit("on-cancel-edit",e)},"on-save-edit":function(e){n.value[e.row.initRowIndex][e.column.key]=n.edittingText,n.$emit("input",n.value),n.$emit("on-save-edit",Object.assign(e,{value:n.edittingText})),n.edittingCellId=""}}})},e},surportHandle:function(e){var t=this,n=e.options||[],a=[];n.forEach(function(e){m[e]&&a.push(m[e])});var s=e.button?[].concat(a,e.button):a;return e.render=function(e,n){return n.tableData=t.value,e("div",s.map(function(a){return a(e,n,t)}))},e},handleColumns:function(e){var t=this;this.insideColumns=e.map(function(e,n){var a=e;return a.editable&&(a=t.suportEdit(a,n)),"handle"===a.key&&(a=t.surportHandle(a)),a})},setDefaultSearchKey:function(){this.searchKey="handle"!==this.columns[0].key?this.columns[0].key:this.columns.length>1?this.columns[1].key:""},handleClear:function(e){""===e.target.value&&(this.insideTableData=this.value)},handleSearch:function(){var e=this;this.insideTableData=this.value.filter(function(t){return!!t[e.searchKey]&&t[e.searchKey].indexOf(e.searchValue)>-1})},handleTableData:function(){this.insideTableData=this.value.map(function(e,t){var n=e;return n.initRowIndex=t,n})},exportCsv:function(e){this.$refs.tablesMain.exportCsv(e)},clearCurrentRow:function(){this.$refs.talbesMain.clearCurrentRow()},onCurrentChange:function(e,t){this.$emit("on-current-change",e,t)},onSelect:function(e,t){this.$emit("on-select",e,t)},onSelectCancel:function(e,t){this.$emit("on-select-cancel",e,t)},onSelectAll:function(e){this.$emit("on-select-all",e)},onSelectionChange:function(e){this.$emit("on-selection-change",e)},onSortChange:function(e,t,n){this.$emit("on-sort-change",e,t,n)},onFilterChange:function(e){this.$emit("on-filter-change",e)},onRowClick:function(e,t){this.$emit("on-row-click",e,t)},onRowDblclick:function(e,t){this.$emit("on-row-dblclick",e,t)},onExpand:function(e,t){this.$emit("on-expand",e,t)},onRefresh:function(){this.$emit("on-refresh")},onPageChanged:function(e){this.$emit("on-page-change",e)},onPageSizeChanged:function(e){this.$emit("on-page-size-change",e)}},watch:{columns:function(e){this.handleColumns(e),this.setDefaultSearchKey()},value:function(e){this.handleTableData(),this.handleSearch()}},mounted:function(){this.handleColumns(this.columns),this.setDefaultSearchKey(),this.handleTableData()}}),f=p,g=Object(c["a"])(f,a,s,!1,null,null,null);g.options.__file="tables.vue";var b=g.exports;t["a"]=b},ffc3:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Card",[n("tables",{ref:"tables",attrs:{editable:"",searchable:"",border:!1,size:"small","search-place":"top",totalCount:e.stores.permission.query.totalCount,columns:e.stores.permission.columns,"row-class-name":e.rowClsRender},on:{"on-delete":e.handleDelete,"on-edit":e.handleEdit,"on-select":e.handleSelect,"on-selection-change":e.handleSelectionChange,"on-refresh":e.handleRefresh,"on-page-change":e.handlePageChanged,"on-page-size-change":e.handlePageSizeChanged},model:{value:e.stores.permission.data,callback:function(t){e.$set(e.stores.permission,"data",t)},expression:"stores.permission.data"}},[n("div",{attrs:{slot:"search"},slot:"search"},[n("section",{staticClass:"dnc-toolbar-wrap"},[n("Row",{attrs:{gutter:16}},[n("Col",{attrs:{span:"16"}},[n("Form",{attrs:{inline:""},nativeOn:{submit:function(e){e.preventDefault()}}},[n("FormItem",[n("Input",{attrs:{type:"text",search:"",clearable:!0,placeholder:"输入关键字搜索..."},on:{"on-search":function(t){e.handleSearchPermission()}},model:{value:e.stores.permission.query.kw,callback:function(t){e.$set(e.stores.permission.query,"kw",t)},expression:"stores.permission.query.kw"}},[n("Select",{staticStyle:{width:"60px"},attrs:{slot:"prepend",placeholder:"删除状态"},on:{"on-change":e.handleSearchPermission},slot:"prepend",model:{value:e.stores.permission.query.isDeleted,callback:function(t){e.$set(e.stores.permission.query,"isDeleted",t)},expression:"stores.permission.query.isDeleted"}},e._l(e.sources.searchSource.isDeletedSources,function(t){return n("Option",{key:t.value,attrs:{value:t.value}},[e._v(e._s(t.text))])})),n("Select",{staticStyle:{width:"60px"},attrs:{slot:"prepend",placeholder:"权限状态"},on:{"on-change":e.handleSearchPermission},slot:"prepend",model:{value:e.stores.permission.query.status,callback:function(t){e.$set(e.stores.permission.query,"status",t)},expression:"stores.permission.query.status"}},e._l(e.sources.searchSource.statusSources,function(t){return n("Option",{key:t.value,attrs:{value:t.value}},[e._v(e._s(t.text))])})),n("Dropdown",{staticStyle:{"min-width":"80px"},attrs:{slot:"prepend",trigger:"click",transfer:!0,placement:"bottom-start"},on:{"on-visible-change":e.handleSearchMenuTreeVisibleChange},slot:"prepend"},[n("Button",{attrs:{type:"primary"}},[n("span",{domProps:{textContent:e._s(e.stores.permission.query.menuName)}}),n("Icon",{attrs:{type:"ios-arrow-down"}})],1),n("div",{staticClass:"text-left pad10",staticStyle:{"min-width":"360px"},attrs:{slot:"list"},slot:"list"},[n("div",[n("Button",{attrs:{type:"primary",size:"small",icon:"ios-search"},on:{click:e.handleRefreshSearchMenuTreeData}},[e._v("刷新菜单")]),n("Button",{staticClass:"ml3",attrs:{type:"primary",size:"small",icon:"md-close"},on:{click:e.handleClearSearchMenuTreeSelection}},[e._v("清空")])],1),n("Tree",{staticClass:"text-left dropdown-tree",attrs:{data:e.sources.searchSource.menuTree.data},on:{"on-select-change":e.handleSearchMenuTreeSelectChange}})],1)],1)],1)],1)],1)],1),n("Col",{staticClass:"dnc-toolbar-btns",attrs:{span:"8"}},[n("ButtonGroup",{staticClass:"mr3"},[n("Button",{staticClass:"txt-danger",attrs:{icon:"md-trash",title:"删除"},on:{click:function(t){e.handleBatchCommand("delete")}}}),n("Button",{staticClass:"txt-success",attrs:{icon:"md-redo",title:"恢复"},on:{click:function(t){e.handleBatchCommand("recover")}}}),n("Button",{staticClass:"txt-danger",attrs:{icon:"md-hand",title:"禁用"},on:{click:function(t){e.handleBatchCommand("forbidden")}}}),n("Button",{staticClass:"txt-success",attrs:{icon:"md-checkmark",title:"启用"},on:{click:function(t){e.handleBatchCommand("normal")}}}),n("Button",{attrs:{icon:"md-refresh",title:"刷新"},on:{click:e.handleRefresh}})],1),n("Button",{attrs:{icon:"md-create",type:"primary",title:"新增权限"},on:{click:e.handleShowCreateWindow}},[e._v("新增权限")])],1)],1)],1)])])],1),n("Drawer",{attrs:{title:e.formTitle,width:"500","mask-closable":!1,mask:!0,styles:e.styles},model:{value:e.formModel.opened,callback:function(t){e.$set(e.formModel,"opened",t)},expression:"formModel.opened"}},[n("Form",{ref:"formPermission",attrs:{model:e.formModel.fields,rules:e.formModel.rules,"label-position":"top"}},[n("Row",{attrs:{gutter:32}},[n("Col",{attrs:{span:"12"}},[n("FormItem",{attrs:{label:"权限名称",prop:"name"}},[n("Input",{attrs:{placeholder:"请输入权限名称"},model:{value:e.formModel.fields.name,callback:function(t){e.$set(e.formModel.fields,"name",t)},expression:"formModel.fields.name"}})],1)],1),n("Col",{attrs:{span:"12"}},[n("FormItem",{attrs:{label:"操作码",prop:"actionCode"}},[n("Input",{attrs:{placeholder:"请输入权限操作码"},model:{value:e.formModel.fields.actionCode,callback:function(t){e.$set(e.formModel.fields,"actionCode",t)},expression:"formModel.fields.actionCode"}})],1)],1)],1),n("Row",[n("Col",{attrs:{span:"24"}},[n("FormItem",{attrs:{"label-position":"left",prop:"menuName"}},[n("Input",{attrs:{placeholder:"请选择菜单",readonly:!0},model:{value:e.formModel.fields.menuName,callback:function(t){e.$set(e.formModel.fields,"menuName",t)},expression:"formModel.fields.menuName"}},[n("Dropdown",{attrs:{slot:"append",trigger:"click",transfer:!0,placement:"bottom-end"},slot:"append"},[n("Button",{attrs:{type:"primary"}},[e._v("选择...\n                  "),n("Icon",{attrs:{type:"ios-arrow-down"}})],1),n("div",{staticClass:"text-left pad10",staticStyle:{"min-width":"360px"},attrs:{slot:"list"},slot:"list"},[n("div",[n("Button",{attrs:{type:"primary",size:"small",icon:"ios-search"},on:{click:e.handleRefreshMenuTreeData}},[e._v("刷新菜单")])],1),n("Tree",{staticClass:"text-left dropdown-tree",attrs:{data:e.sources.formSource.menuTree.data},on:{"on-select-change":e.handleMenuTreeSelectChange}})],1)],1)],1)],1)],1)],1),n("Row",{attrs:{gutter:32}},[n("Col",{attrs:{span:"12"}},[n("FormItem",{attrs:{label:"类型",prop:"type"}},[n("Select",{attrs:{placeholder:"权限类型"},model:{value:e.formModel.fields.type,callback:function(t){e.$set(e.formModel.fields,"type",t)},expression:"formModel.fields.type"}},e._l(e.sources.formSource.permissionTypeSources,function(t){return n("Option",{key:t.value,attrs:{value:t.value,disabled:t.disabled}},[e._v(e._s(t.text))])}))],1)],1),n("Col",{attrs:{span:"12"}},[n("FormItem",{attrs:{label:"状态",prop:"status"}},[n("i-switch",{attrs:{size:"large","true-value":1,"false-value":0},model:{value:e.formModel.fields.status,callback:function(t){e.$set(e.formModel.fields,"status",t)},expression:"formModel.fields.status"}},[n("span",{attrs:{slot:"open"},slot:"open"},[e._v("正常")]),n("span",{attrs:{slot:"close"},slot:"close"},[e._v("禁用")])])],1)],1)],1),n("FormItem",{attrs:{label:"备注","label-position":"top"}},[n("Input",{attrs:{type:"textarea",rows:4,placeholder:"权限备注信息"},model:{value:e.formModel.fields.description,callback:function(t){e.$set(e.formModel.fields,"description",t)},expression:"formModel.fields.description"}})],1)],1),n("div",{staticClass:"demo-drawer-footer"},[n("Button",{attrs:{icon:"md-checkmark-circle",type:"primary"},on:{click:e.handleSubmitPermission}},[e._v("保 存")]),n("Button",{staticStyle:{"margin-left":"8px"},attrs:{icon:"md-close"},on:{click:function(t){e.formModel.opened=!1}}},[e._v("取 消")])],1)],1)],1)},s=[],o=n("fa69"),i=n("a8ba"),r=n("6639"),l={name:"rbac_permission_page",components:{Tables:o["a"]},data:function(){return{commands:{delete:{name:"delete",title:"删除"},recover:{name:"recover",title:"恢复"},forbidden:{name:"forbidden",title:"禁用"},normal:{name:"normal",title:"启用"}},formModel:{opened:!1,title:"创建权限",mode:"create",selection:[],fields:{code:"",name:"",actionCode:"",avatar:"",isLocked:0,status:1,isDeleted:0,type:1,menuGuid:"",menuName:"",description:""},rules:{name:[{type:"string",required:!0,message:"请输入权限名称",min:2}],actionCode:[{type:"string",required:!0,message:"请输入权限操作码",min:2}],menuName:[{type:"string",required:!0,message:"请选择菜单",min:2}],type:[{type:"number",required:!0,message:"请输入权限操作码"}]}},stores:{permission:{query:{totalCount:0,pageSize:20,currentPage:1,kw:"",isDeleted:0,status:-1,menuGuid:"",menuName:"请选择...",sort:[{direct:"DESC",field:"CreatedOn"}]},columns:[{type:"selection",width:50,key:"handle"},{title:"权限名称",key:"name",width:250,sortable:!0},{title:"关联菜单",key:"menuName",width:250},{title:"操作码",key:"actionCode",minWidth:200},{title:"状态",key:"status",align:"center",width:100,render:function(e,t){var n=t.row.status,a="success",s="正常";switch(n){case 0:s="禁用",a="default";break}return e("Tooltip",{props:{placement:"top",transfer:!0,delay:500}},[e("Tag",{props:{color:a}},s),e("p",{slot:"content",style:{whiteSpace:"normal"}},s)])}},{title:"类型",key:"permissionTypeText",align:"center",width:100,render:function(e,t){var n=t.row.permissionTypeText,a="success",s="未知";switch(n){case"Action":s="按钮";break;case"Menu":s="菜单",a="primary";break}return e("Tooltip",{props:{placement:"top",transfer:!0,delay:500}},[e("Tag",{props:{color:a}},s),e("p",{slot:"content",style:{whiteSpace:"normal"}},s)])}},{title:"创建时间",width:120,ellipsis:!0,tooltip:!0,key:"createdOn"},{title:"创建者",key:"createdByUserName",width:80,ellipsis:!0,tooltip:!0},{title:"操作",align:"center",key:"handle",width:150,className:"table-command-column",options:["edit"],button:[function(e,t,n){return e("Poptip",{props:{confirm:!0,title:"你确定要删除吗?"},on:{"on-ok":function(){n.$emit("on-delete",t)}}},[e("Tooltip",{props:{placement:"left",transfer:!0,delay:1e3}},[e("Button",{props:{shape:"circle",size:"small",icon:"md-trash",type:"error"}}),e("p",{slot:"content",style:{whiteSpace:"normal"}},"删除")])])},function(e,t,n){return e("Tooltip",{props:{placement:"left",transfer:!0,delay:1e3}},[e("Button",{props:{shape:"circle",size:"small",icon:"md-create",type:"primary"},on:{click:function(){n.$emit("on-edit",t),n.$emit("input",t.tableData)}}}),e("p",{slot:"content",style:{whiteSpace:"normal"}},"编辑")])}]}],data:[]}},sources:{formSource:{permissionTypeSources:[{value:0,text:"菜单",disabled:!1},{value:1,text:"按钮",disabled:!1}],menuTree:{data:[]}},searchSource:{isDeletedSources:[{value:-1,text:"全部"},{value:0,text:"正常"},{value:1,text:"已删"}],statusSources:[{value:-1,text:"全部"},{value:0,text:"禁用"},{value:1,text:"正常"}],menuTree:{inited:!1,data:[]}}},styles:{height:"calc(100% - 55px)",overflow:"auto",paddingBottom:"53px",position:"static"}}},computed:{formTitle:function(){return"create"===this.formModel.mode?"创建权限":"edit"===this.formModel.mode?"编辑权限":""},selectedRows:function(){return this.formModel.selection},selectedRowsId:function(){return this.formModel.selection.map(function(e){return e.code})}},methods:{loadPermissionList:function(){var e=this;Object(i["e"])(this.stores.permission.query).then(function(t){e.stores.permission.data=t.data.data,e.stores.permission.query.totalCount=t.data.totalCount})},handleOpenFormWindow:function(){this.formModel.opened=!0},handleCloseFormWindow:function(){this.formModel.opened=!1},handleSwitchFormModeToCreate:function(){this.formModel.mode="create"},handleSwitchFormModeToEdit:function(){this.formModel.mode="edit",this.handleOpenFormWindow()},handleEdit:function(e){this.handleSwitchFormModeToEdit(),this.handleResetFormPermission(),this.doLoadPermission(e.row.code)},handleSelect:function(e,t){},handleSelectionChange:function(e){this.formModel.selection=e},handleRefresh:function(){this.loadPermissionList()},handleShowCreateWindow:function(){this.handleSwitchFormModeToCreate(),this.handleOpenFormWindow(),this.handleResetFormPermission(),this.handleRefreshMenuTreeData()},handleSubmitPermission:function(){var e=this.validatePermissionForm();e&&("create"===this.formModel.mode&&this.doCreatePermission(),"edit"===this.formModel.mode&&this.doEditPermission())},handleResetFormPermission:function(){this.$refs["formPermission"].resetFields(),this.formModel.fields.menuGuid="",this.formModel.fields.menuName=""},doCreatePermission:function(){var e=this;Object(i["b"])(this.formModel.fields).then(function(t){200==t.data.code?(e.$Message.success("操作成功"),e.handleCloseFormWindow(),e.loadPermissionList()):e.$Message.warning(t.data.message)})},doEditPermission:function(){var e=this;Object(i["d"])(this.formModel.fields).then(function(t){200==t.data.code?(e.$Message.success("操作成功"),e.handleCloseFormWindow(),e.loadPermissionList()):e.$Message.warning(t.data.message)})},validatePermissionForm:function(){var e=this,t=!1;return this.$refs["formPermission"].validate(function(n){n?t=!0:(e.$Message.error("请完善表单信息"),t=!1)}),t},doLoadPermission:function(e){var t=this;Object(i["f"])({code:e}).then(function(e){t.formModel.fields=e.data.data,t.handleRefreshMenuTreeData(t.formModel.fields.menuGuid)})},handleDelete:function(e){this.doDelete(e.row.code)},doDelete:function(e){var t=this;e?Object(i["c"])(e).then(function(e){200==e.data.code?(t.$Message.success(e.data.message),t.loadPermissionList()):t.$Message.warning(e.data.message)}):this.$Message.warning("请选择至少一条数据")},handleBatchCommand:function(e){var t=this;!this.selectedRowsId||this.selectedRowsId.length<=0?this.$Message.warning("请选择至少一条数据"):this.$Modal.confirm({title:"操作提示",content:"<p>确定要执行当前 ["+this.commands[e].title+"] 操作吗?</p>",loading:!0,onOk:function(){t.doBatchCommand(e)}})},doBatchCommand:function(e){var t=this;Object(i["a"])({command:e,ids:this.selectedRowsId.join(",")}).then(function(e){200===e.data.code?(t.$Message.success(e.data.message),t.loadPermissionList(),t.formModel.selection=[]):t.$Message.warning(e.data.message),t.$Modal.remove()})},handleSearchPermission:function(){this.loadPermissionList()},rowClsRender:function(e,t){return e.isDeleted?"table-row-disabled":""},handlePageChanged:function(e){this.stores.permission.query.currentPage=e,this.loadPermissionList()},handlePageSizeChanged:function(e){this.stores.permission.query.pageSize=e,this.loadPermissionList()},doLoadMenuTree:function(e){var t=this;Object(r["g"])(e).then(function(e){t.sources.formSource.menuTree.data=e.data.data})},handleMenuTreeSelectChange:function(e){var t=e[0];t&&(this.formModel.fields.menuGuid=t.guid,this.formModel.fields.menuName=t.title)},handleRefreshMenuTreeData:function(e){this.doLoadMenuTree(e||null)},doLoadSearchMenuTree:function(){var e=this;Object(r["g"])(null).then(function(t){e.sources.searchSource.menuTree.data=t.data.data})},handleSearchMenuTreeSelectChange:function(e){var t=e[0];t&&(this.stores.permission.query.menuGuid=t.guid,this.stores.permission.query.menuName=t.title),this.loadPermissionList()},handleRefreshSearchMenuTreeData:function(){this.doLoadSearchMenuTree()},handleSearchMenuTreeVisibleChange:function(e){e&&!this.sources.searchSource.menuTree.inited&&(this.sources.searchSource.menuTree.inited=!0,this.handleRefreshSearchMenuTreeData())},handleClearSearchMenuTreeSelection:function(){this.stores.permission.query.menuGuid="",this.stores.permission.query.menuName="请选择...",this.loadPermissionList()}},mounted:function(){this.loadPermissionList(),this.handleRefreshMenuTreeData()}},c=l,d=n("2877"),u=Object(d["a"])(c,a,s,!1,null,null,null);u.options.__file="permission.vue";t["default"]=u.exports}}]);