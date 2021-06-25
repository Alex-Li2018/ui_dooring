<template>
    <div class="home_wrap">
        <BusiHeader />
        <div class="blank_wrap" />
        <div class="container_wrap">
            <BusiTitle title="我的页面" />
            <div class="search_wrap flex_layout">
                <el-button 
                    @click="jumpUrl" 
                    type="primary"
                    class="mar-right-20">
                    添加页面
                </el-button>
                <el-input 
                    placeholder="请输入内容" 
                    v-model="params.keyword" 
                    @click.native="handlerSearch"
                >
                    <el-button 
                        slot="append" 
                        icon="el-icon-search"
                        @click="handlerSearch"
                    />
                </el-input>
            </div>
            <el-table
                :data="tableData.lists"
                style="width: 100%"
            >
                <el-table-column
                    prop="id"
                    label="ID"
                    width="180"
                />
                <el-table-column
                    prop="name"
                    label="名称"
                >
                    <template slot-scope="{ row }">
                        <div 
                            @click="handleEditor(row)" 
                            class="ui-link">
                            {{ row.name }}
                        </div>
                    </template>
                </el-table-column>
                <el-table-column
                    label="操作"
                    width="100"
                >
                    <template slot-scope="scope">
                        <el-button
                            type="text"
                            size="small"
                            class="danger"
                            @click="handleDelete(scope.row)"
                        >
                            删除
                        </el-button>
                        <el-button
                            type="text"
                            size="small"
                            @click="handleEditor(scope.row)"
                        >
                            编辑
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="mar-top-20">
                <el-pagination
                    background
                    layout="total, sizes, prev, pager, next, jumper"
                    :current-page.sync="params.page"
                    :page-size="params.page_size"
                    :total="tableData.total"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                />
            </div> 
        </div>
    </div>
</template>

<script>
    import busiApi from '@/api/busi';
    import BusiHeader from './components/BusiHeader.vue';
    import BusiTitle from './components/BusiTitle.vue';

    export default {
        components: {
            BusiHeader,
            BusiTitle
        },
        data() {
            return {
                tableData: {
                    lists: [],
                    total: null
                },
                params: {
                    keyword: '',
                    page: 1,
                    page_size: 10
                }
            };
        },
        created() {
            this.loadData();
        },
        methods: {
            async loadData() {
                const {data} = await busiApi.pageList(this.params);
                this.tableData.lists = data.lists;
                this.tableData.total = data.total;
            },
            handleSizeChange(val) {
                this.params.page_size = val;
                this.loadData();
            },
            handleCurrentChange(val) {
                this.params.page = val;
                this.loadData();
            },
            handleDelete({ id }) {
                this.$confirm('此操作将永久删除页面, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(async () => {
                    await busiApi.delPage(id);
                    this.loadData();
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'error',
                        message: '已取消删除'
                    });          
                });
            },
            handleEditor({ id }) {
                this.$router.push({
                    path: '/editor',
                    query: {
                        id
                    }
                });
            },
            handlerSearch() {
                this.params.page = 1;
                this.loadData();
            },
            jumpUrl() {
                this.$router.push({
                    path: '/editor'
                });
            }
        }
    };
</script>

<style lang="scss">
.home_wrap {
    .blank_wrap {
        height: 76px;
        width: 100%;
    }
    .container_wrap {
        padding: 0 40px;
        box-sizing: border-box;
    }
}
.search_wrap {
    width: 500px;
    margin-top: 20px;
}
</style>