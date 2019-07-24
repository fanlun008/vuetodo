<template>
  <div class="home-container">
    <!-- <a-row>
      <a-col :span="6">goback</a-col>
      <a-col :span="15"></a-col>
      <a-col :span="3">welcome:{{userName}}</a-col>
    </a-row>
    <div class="left-nav">
      <div>
        <a-menu mode="inline" style="width: 100%">
          <a-sub-menu key="sub1">
            <span slot="title">
              <a-icon type="mail" /><span>Navigation One</span></span>
            <a-menu-item key="1">
              <router-link :to="{path: `/home/${this.userName}`}" style="text-decoration: none;">todoList</router-link>
            </a-menu-item>
            <a-menu-item key="2">
              <router-link :to="{path: `/myInfo/${this.userName}`}" style="text-decoration: none;">myInfo</router-link>
            </a-menu-item>
          </a-sub-menu>
        </a-menu>
      </div>
    </div>
    <div class="right-nav">
      <router-view></router-view>
    </div> -->


    <!-- ------------------------------------------------------------------ -->
    <a-layout id="home-layout">
      <a-layout-header>
        <a-row>
          <a-col :span="2" :offset="22">
            <a-avatar :size="46" icon="user" style="color: white; background:#424a41;"/>
            <span>Hi, {{userName}}</span>
          </a-col>
        </a-row>
        
      </a-layout-header>
      <a-layout>
        <a-layout-sider>
          <div>
            <a-menu mode="inline" style="width: 100%" theme="dark">
              <a-sub-menu key="sub1">
                <span slot="title">
                  <a-icon type="mail" /><span>Navigation One</span></span>
                <a-menu-item key="1">
                  <router-link :to="{path: `/home/${this.userName}`}" style="text-decoration: none;">todoList
                  </router-link>
                </a-menu-item>
                <a-menu-item key="2">
                  <router-link :to="{path: `/myInfo/${this.userName}`}" style="text-decoration: none;">myInfo
                  </router-link>
                </a-menu-item>
              </a-sub-menu>
            </a-menu>
          </div>
        </a-layout-sider>
        <a-layout-content>
          <router-view></router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>

import {Button} from 'ant-design-vue/lib/button'
import {Input} from 'ant-design-vue/lib/input'
import "ant-design-vue/dist/antd.css";
export default {
  components: {
    Button,
  },
  methods: {
    to(path) {
      this.$router.push(path)
    }
  },
  data() {
    return {
      userName: this.$route.params.id
    }
  },
};
</script>

<style>
.home-container {
  border: 1px solid black;
  width: 100%;
  /* height: 800px; */
}

#home-layout .ant-layout-header {
  background: #4c6175;
  color: white;
}

#home-layout .ant-layout-content {
  min-height: 500px;
  padding: 40px;
}

.home-container .left-nav {
  position: relative;
  width: 15%;
  height: 85%;
  padding-top: 100px;
  border: 1px solid black;
  display: inline-block;
}

.home-container .right-nav {
  height: 780px;
  width: 84%;
  border: 1px solid black;
  display: inline-block;
  position: relative;
  float: right;
}
</style>