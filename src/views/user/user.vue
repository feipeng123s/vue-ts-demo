<template>
    <div style="overflow: hidden;">
        <div class="t-p-content-10">
            <div class="t-container">
                <div class="t-mini-button">
                    <el-button size="mini" type="primary" @click="add">添加用户</el-button>
                </div>
                <!-- 筛选条件 -->
                <div class="t-search-content">
                    <el-form size="mini" label-width="140px">
                        <el-row :gutter="20">
                            <el-col :span="8">
                                <el-form-item label="用户名：">
                                    <el-input v-model="userFilter.name" class="w-80" placeholder="用户名"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="角色名称：">
                                    <el-select v-model="userFilter.roleId"  class="w-80" placeholder="角色名称">
                                        <el-option value="" label="全部">全部</el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="状态：">
                                    <el-select v-model="userFilter.isDel" class="w-80" placeholder="状态">
                                        <el-option value="" label="全部">全部</el-option>
                                        <el-option value="1" label="封停"></el-option>
                                        <el-option value="0" label="正常"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row :gutter="20">
                            <el-col :span="24">
                                <el-form-item label="">
                                    <el-button size="mini" type=primary>筛选</el-button>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-form>
                </div>
                <!-- 列表 -->
                <el-table
                        :data="tableData"
                        border
                        v-loading="loading"
                         max-height="700"
                          style="width: 100%;margin-top: 20px;">
                    <el-table-column
                            prop="name"
                            align="center"
                            label="用户昵称">
                        <template slot-scope="{row}">
                            {{row.name}}
                        </template>
                    </el-table-column>
                    <el-table-column
                            prop="roleName"
                            align="center"
                            label="角色名称">
                        <template slot-scope="{row}">
                            <div v-for="(role,$index) in row.userRoleList" :key="$index">
                                {{role.name}}
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column
                            prop="createDate"
                            align="center"
                            label="创建时间">
                        <template slot-scope="{row}">
                            {{row.createDate | fromateDate}}
                        </template>
                    </el-table-column>
                    <el-table-column
                            prop="status"
                            align="center"
                            label="状态">
                        <template slot-scope="{row}">
                            {{row.isDel | userIsSeal}}
                        </template>
                    </el-table-column>
                    <el-table-column
                            align="center"
                            label="操作">
                        <template slot-scope="{row}">
                            <el-button type="text" size="small" @click="edit(row)">编辑</el-button>
                            <el-button type="text" size="small">封停</el-button>
                            <el-button type="text" size="small">回归</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <Pagination></Pagination>
                <!-- 弹窗 -->
                <el-dialog
                        title="用户操作"
                        :visible.sync="centerDialogVisible"
                        width="30%"
                        center>
                    <el-form ref="form" :model="user" label-width="80px">
                        <el-form-item label="登录名">
                            <el-input v-model="user.loginAccount" placeholder="登录名"></el-input>
                        </el-form-item>
                        <el-form-item label="姓名">
                            <el-input v-model="user.name" placeholder="姓名"></el-input>
                        </el-form-item>
                        <el-form-item label="状态">
                            <el-radio-group v-model="user.isDel" placeholder="状态" class="m-b-8">
                                <el-radio :label="'0'">可用</el-radio>
                                <el-radio :label="'1'">封停</el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="commitUser">提交</el-button>
                        </el-form-item>
                    </el-form>
                </el-dialog>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Pagination from '@/components/pagination/pagination.vue'

@Component({
  components: {
    Pagination
  }
})
export default class UserComponent extends Vue {
  private userFilter: object = {}
  private loading: boolean = false
  private tableData: object[] = []
  private centerDialogVisible: boolean = false
  private user: object = {}

  private create () {
    this.queryPage(this.$route.query)
  }

  private queryPage (query: any) {
    const filter: any = this.deep(query)
    if (!filter.pageNum) {
      filter.pageNum = 1
      filter.pageSize = 20
    }
    this.loading = true

    // UserApi.getPageUser(query)
    //     .then((res: any) => {
    //         console.log(res);
    //     });
  }

  private deep (obj: object) {
    return JSON.parse(JSON.stringify(obj))
  }

  private add () {
    this.user = {}
    this.centerDialogVisible = true
  }

  // 编辑用户
  private edit (user: object) {
    // console.log('edit user');
  }

  private commitUser () {
    // console.log('commit user');
  }
}
</script>

<style lang="less" scoped>
    .t-p-content-10{
        background: #fff;
        margin: 10px 10px 0;
    }
    .t-container{
        min-height: 900px;
        min-width: 750px;
        padding: 15px;
        box-sizing: border-box;
    }
    .t-mini-button {
        margin-bottom: 15px;
    }
    .t-search-content {
        background: #f8f8f8;
        padding: 20px 15px;
    }
    .w-80{
        width: 80%;
    }
</style>
