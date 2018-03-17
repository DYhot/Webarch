<template>
  <div id="permission-page">
    <!--头部导航栏-->
    <webhead></webhead>
    <!-- BEGIN CONTAINER -->
    <div class=" page-container row-fluid">
      <siderbar></siderbar>
      <div class="page-content">
        <div class="content sm-gutter">
          <div class="row permission-search">
            <div class="col-lg-12">
              <div class="panel panel-default ">
                <div class="panel-heading ">
                  <div class="card-title">
                    <button type="button" class="btn btn-success"
                            data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo"
                            @click="addmodal()">新增管理员
                    </button>
                  </div>
                </div>
                <div class="panel-body">
                  <div class="col-lg-3">
                    <label>用户名:</label>
                    <input type="text" class="" v-model="search.name" placeholder="Jane Doe">
                  </div>
                  <div class="col-lg-3">
                    <label>邮箱:</label>
                    <input type="text" class="" v-model="search.email" placeholder="123456789@qq.com">
                  </div>
                  <div class="col-lg-3">
                    <label>联系电话:</label>
                    <input type="text" class="" v-model="search.tel" placeholder="13387234936">
                  </div>
                  <div class="col-lg-1">
                    <button type="button" class="btn btn-success" @click="adminSearch()">查询</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="permission-add">
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true" @click="close()">&times;</span></button>
                    <h4 class="modal-title" id="exampleModalLabel">{{modaltitle}}</h4>
                  </div>
                  <div class="modal-body permission-modal-body">
                    <form>
                      <div class="form-inline col-lg-6 ">
                        <label class="control-label ">&emsp;&emsp;账号:</label>
                        <input type="text" class="form-control" v-model="modaldata.name">
                      </div>
                      <div class="form-inline col-lg-6 ">
                        <label class="control-label">密码:</label>
                        <input type="password" class="form-control" v-model="modaldata.password">
                      </div>
                      <div class="form-inline col-lg-6">
                        <label class="control-label">确认密码:</label>
                        <input type="password" class="form-control" v-model="modaldata.surepassword">
                      </div>
                      <div class="form-inline col-lg-6">
                        <label class="control-label">电话:</label>
                        <input type="text" class="form-control" v-model="modaldata.tel">
                      </div>
                      <div class="form-inline col-lg-6">
                        <label class="control-label">&emsp;&emsp;邮箱:</label>
                        <input type="text" class="form-control" v-model="modaldata.email">
                      </div>
                      <div class="form-group col-lg-12 ">
                        <label class=" avatar-title">头像上传:</label>
                        <div>
                          <!--action="http://192.168.1.4:3100/addAdmin"-->
                          <el-upload
                            class="upload-avatar"
                            action="123"
                            ref="upload"
                            name="myfile"
                            :auto-upload="false"
                            accept=".jpg"
                            list-type="picture-card"
                            :on-change="aaa"
                            :on-preview="handlePictureCardPreview"
                            :http-request="myUpload"
                            :on-remove="handleRemove"
                            :before-upload="beforeUpload"
                            :on-success="handleSuccess"
                            :on-error="handleError">
                            <i class="el-icon-plus"></i>
                          </el-upload>
                          <el-dialog :visible.sync="dialogVisible">
                            <img width="100%" :src="dialogImageUrl" alt="">
                          </el-dialog>
                          <!--<div class="avatarbox" >-->
                          <!--<h5>头像预览</h5>-->
                          <!--<img v-if="imageUrl" :src="dialogImageUrl" class="addavatar">-->
                          <!--</div>-->
                          <!--<el-button type="primary" @click="newSubmitForm()" class="yes-btn">-->
                          <!--确 定-->
                          <!--</el-button>-->
                          <!--<el-button @click="resetForm('newform')">-->
                          <!--重 置-->
                          <!--</el-button>-->
                          <div class="modal-footer col-lg-12">
                            <button type="button" class="btn btn-default admin-cancel" data-dismiss="modal"
                                    @click="close()">取消
                            </button>
                            <button type="button" class="btn btn-primary admin-cancel" @click="reset()">重置</button>
                            <button type="button" class="btn btn-primary permission-submit"
                                    @click="addAdmin()">提交
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div class="permission-table">
            <el-table
              ref="multipleTable"
              :data="adminlist"
              tooltip-effect="dark"
              style="width: 100%"
              @selection-change="handleSelectionChange">
              <el-table-column
                type="selection"
                width="50">
              </el-table-column>
              <el-table-column
                label="序号"
                type="index"
                width="30"
                align="center">
              </el-table-column>
              <el-table-column
                prop="a_name"
                label="用户名"
                width="140"
                align="center">
              </el-table-column>
              <el-table-column
                label="头像"
                width="80"
                align="center">
                <template slot-scope="scope">
                  <div class="demo"><img :src="scope.row.a_headimg" alt="" id="permission-row-headimg"></div>
                </template>
              </el-table-column>
              <el-table-column
                prop="a_tel"
                label="联系电话"
                align="center"
                show-overflow-tooltip>
              </el-table-column>
              <el-table-column
                prop="a_email"
                label="邮箱"
                align="center"
                show-overflow-tooltip>
              </el-table-column>
              <el-table-column
                prop="createtime"
                label="创建时间"
                align="center">
                <!--<template slot-scope="scope">{{ scope.row.date }}</template>-->
              </el-table-column>
              <el-table-column
                prop="prelogintime"
                label="上次登录时间"
                align="center">
                <!--<template slot-scope="scope">{{ scope.row.date }}</template>-->
              </el-table-column>
              <el-table-column
                prop="permission"
                label="权限等级"
                width="60"
                align="center">
                <template slot-scope="scope">
                  <span v-if="scope.row.permission==1">高级</span>
                  <span v-if="scope.row.permission!=1">普通</span>
                </template>
              </el-table-column>
              <el-table-column
                prop="state"
                label="状态"
                width="60"
                align="center">
                <template slot-scope="scope">
                  <el-button
                    disabled
                    size="mini"
                    type="primary"
                    @click="handleDelete(scope.$index, scope.row)" v-if="scope.row.state==1">启用
                  </el-button>
                  <el-button
                    disabled
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)" v-if="scope.row.state!=1">禁用
                  </el-button>
                </template>
              </el-table-column>
              <el-table-column label="操作" align="center"
                               width="150">
                <template slot-scope="scope">
                  <el-button
                    size="mini"
                    data-dismiss="modal" aria-label="Close"
                    @click="handleEdit(scope.$index, scope.row)">编辑
                  </el-button>
                  <el-button
                    size="mini"
                    type="primary"
                    @click="handleDelete(scope.$index, scope.row)" v-if="scope.row.state!=1">启用
                  </el-button>
                  <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)" v-if="scope.row.state==1">禁用
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
            <template prop="total">
              <div class="permission-page-block">
                <el-button @click="toggleSelection()" class="permission-page-left">取消全选</el-button>
                <span class="demonstration"></span>
                <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="total.currentPage"
                  :page-sizes="[5, 10, 15, 20]"
                  :page-size="100"
                  layout="total, sizes, prev, pager, next, jumper"
                  :total="total.totalPage">
                </el-pagination>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import '../../assets/css/reset.css';
  import '../../assets/css/webarch.css';
  import webhead from '../../components/Webhead.vue';
  import siderbar from '../../components/Siderbar.vue';
  import uploadhead from '../../components/uploadhead.vue';
  import axios from 'axios';
  import cookieUtil from '../../middleware/cookieUtil';

  export default {
    data() {
      return {
        fileid: '',
        fileList: [],
        dialogImageUrl: '',
        imageUrl: '',
        dialogVisible: false,
        modaltitle: "",
        search: {
          name: "",
          email: "",
          tel: ""
        },
        modaldata: {
          name: "",
          password: "",
          surepassword: "",
          tel: "",
          email: "",
          imgdata: [],
          imgName:""
        },
        multipleSelection: []
      }
    },
    async asyncData() {
      let that = this;
      let token = cookieUtil.get("user");
      console.log("cookie的token", token)
      let [dataRes, countRes] = await Promise.all([
        axios.get(`/api/getadmin.do`, {params: {currentPage: 1, everyPageCount: 5, token: token}}),
        axios.get(`/api/getadminCount.do`)
      ])
//    console.log("我是返回的数据",dataRes.data.message)
      if (dataRes.data.success == false) {
        location.href = "/";
      } else {
        dataRes.data.forEach((value, index, array) => {
          let date = new Date(value.createtime);
          let date1 = new Date(value.prelogintime);
          value.createtime = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + "  " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
          value.prelogintime = date1.getFullYear() + "-" + (date1.getMonth() + 1) + "-" + date1.getDate() + "  " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        })
      }
      return {
        adminlist: dataRes.data,
        total: {totalPage: countRes.data.count, currentPage: 1, everyPageCount: 5}
      }
    },
    components: {
      webhead: webhead,
      siderbar: siderbar,
      uploadhead: uploadhead
    },
    methods: {
//    头像上传
      aaa(content) {
//
//      this.file=content.file
//    console.log("content:",content)
      },
      myUpload(content) {
        console.log("wo shi file:", content.file)
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        console.log("我是选择后的file:", file);
//      this.modaldata.imgdata.push(file)
        this.dialogVisible = true;
      },
      async beforeUpload(file) {
        let that=this;
        console.log("上传之前的file", file)
        this.modaldata.imgName=file.name;
        console.log("图片名", this.modaldata.imgName)
        let fd = new FormData();
        fd.append('myfile', file);
        fd.append('fileid', this.fileid);
        let textdata = this.modaldata;
        console.log("fileid:", this.fileid)
        this.modaldata.imgdata = [];
        this.modaldata.imgdata.push(fd);
        console.log("modaldata:", this.modaldata)
        $.ajax({
          url: "/api/uploadavatar.do",
          type: 'post',
          data: this.modaldata.imgdata[0],
          cache: false,
          contentType: false,
          processData: false,
          success: function (data) {
            console.log("上传成功")
            if(data=="ok"){
              for (let key in this.modaldata) {
                this.modaldata[key] = "";
              }
              $('#exampleModal').modal('hide');
              $(".modal-backdrop.in").css({"display":"none"});
//              $("#exampleModal").remove();
              that.opensuccess();
            }else {
              that.openerror();
            }

          },
          error: function () {
            console.log("与服务器通信发生错误")
          }
        })
//      let result = await this.axios({
//                method: 'post',
//                url: '/api/addadmin.do',
//                timeout: 20000,
//                data: fd
//    })
        return true
      },
      handleSuccess() {

      },
      handleError() {

      },
      newSubmitForm() {
        this.$refs.newupload.submit()
      },
      newhandleChange() {

      },
      async addAdmin() {
        await  axios.post('/api/addadminInfo.do', {"addform": this.modaldata})
          .then((result) => {
            console.log("jieguo:", result.data[0])
            if (result.data) {
              this.fileid = result.data[0];
              this.$refs.upload.submit()
            }
          })
        console.log("refs:", this.$refs)

      },
      reset() {
        for (let key in this.modaldata) {
          this.modaldata[key] = "";
        }
      },
      //  时间处理函数
      settime(val) {
        val.forEach((value, index, array) => {
          let date = new Date(value.createtime);
          let date1 = new Date(value.prelogintime);
          value.createtime = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + "  " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
          value.prelogintime = date1.getFullYear() + "-" + (date1.getMonth() + 1) + "-" + date1.getDate() + "  " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        })
      },
      //  获取更新后的数据
      async getUpdateData() {
        let result = await  axios.get('/api/getUpdateData.do',
          {params: {currentPage: this.total.currentPage, everyPageCount: this.total.everyPageCount}})
        this.settime(result.data);
        this.adminlist = result.data;
      },
      async adminSearch() {
        let result = await  axios.post('/api/adminSearch.do',
          {
            name: this.search.name, email: this.search.email, tel: this.search.tel,
            currentPage: this.total.currentPage, everyPageCount: this.total.everyPageCount
          })
        this.settime(result.data);
        this.adminlist = result.data;
        for (let key in this.search) {
          this.search[key] = "";
        }
      },
//    消息提示
      opensuccess() {
        this.$message({
          message: '恭喜你，这是一条成功消息',
          type: 'success'
        });
      },
      openerror() {
        this.$message.error('错了哦，这是一条错误消息');
      },
//    关闭模态框清空输入框数据
      close() {
        for (let key in this.modaldata) {
          this.modaldata[key] = "";
        }
      },
      addmodal() {
        this.modaltitle = "新增管理员";
//        $(".modal-backdrop.in").css({"opacity":"0.5"});
//        $('#exampleModal').modal('show');
      },
//    编辑
      handleEdit(index, row) {
        $('.modal').modal('show');
        this.modaltitle = "修改管理员信息";
        this.modaldata.name = row.a_name;
        this.modaldata.password = this.modaldata.surepassword = row.a_pwd;
        this.modaldata.tel = row.a_tel;
        this.modaldata.email = row.a_yx;
      },
//    禁用
      async handleDelete(index, row) {
        let that = this;
        let adminstate = (row.state > 0) ? 0 : 1;
        let result = await axios.post(`/api/swithadmin.do`, {"id": row.a_id, "state": adminstate});
        result.data ? that.opensuccess() : that.openerror();
        if (result.data) {
          this.adminlist[index].state = adminstate;
        }
      },
//    取消全选
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
//    分页
      handleSizeChange(val) {
        this.total.everyPageCount = val;
        this.getUpdateData();
      },
      handleCurrentChange(val) {
        this.total.currentPage = val;
        this.getUpdateData();
      },
    }
  }
</script>
<style>


</style>
