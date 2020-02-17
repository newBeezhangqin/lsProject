<template>
      <div id="login">
                <div class="login_title">
                    <div class="margin">
                </div>
            <div class="login_content">
                <div class="login_log">
                        <div class="lsLogo"></div>
                        <input type="text" name="username" class="user" placeholder="用户名" v-model="username"/>
                        <input type="password" name="password" class="pass" placeholder="密码" v-model="password"/>
                        <div class="check">
                            <input type="checkbox" class="check_box"/>
                            <span>记住密码</span>
                        </div>
                        <input type="submit" value="登录" class="sub" @click="sendTemp"/>
                </div>
            </div>
        </div>        
    </div>
</template>
<script>
export default {
name:'Login',
data(){
    return{
        username:'',
        password:''
    }
},
methods:{
    sendTemp(){
        alert('点我登录哈')
    }
},
components:{

},
mounted(){

}
}
</script>
<style scoped>
   #login{
        height:1080px;
        background-color:rgba(14,23,50,1);
        background-image: url(../assets/img/bg@2x.png);
        overflow: hidden;
        position: relative;
        opacity:0.9;}
    .margin{
            width:1920px;
            margin: 0 auto;
    }
.login_content{
    float: left;
    width:630px;height:611px;
    background:url(../assets/img/登录框@2x.png) no-repeat center;
    position: relative;
    margin-left:1139px;margin-top:235px;
}
.login_content .login_log .sub{
    width:516px;
    height:56px;
    background:rgba(51,119,254,1);
    position: absolute;
    left:58px; top:467px;
    font-size:22px;
    font-family:28;
    font-weight:400;
    color:rgba(255,255,255,1);
    line-height:13px;
}
.login_content .login_log .user{
    width:515.2px;height:55.8px;
    border:2px solid #fff;
    position: absolute;
    font-size:24px;
    font-family:58;
    font-weight:400;
    line-height:26px;
    left:58px;
    text-indent: 66px;
    top:176px;
    background-image: url(../assets/img/登录@2x.png);
    background-size: 23px 24px;
    background-repeat: no-repeat;
    background-position-y:center ;
    background-position-x:20px;
    background-color:rgba(32,163,245,0.4);
    color: #fff;
}
.lsLogo{
    width: 417px;height: 50px;position: absolute;
    background: url(../assets/img/丽水医疗数据平台.png) no-repeat center;left:107px;top:65px;
}
.login_content .login_log .pass{
    width:515.2px;height:55.8px;
    border:2px solid #fff;
    position: absolute;
    font-size:24px;
    font-family:58;
    font-weight:400;
    line-height:26px;
    left:58px;
    text-indent: 66px;
    top:289px;
    background-image: url(../assets/img/密码@2x.png);
    background-size: 23px 24px;
    background-repeat: no-repeat;
    background-position-y:center ;
    background-position-x:20px;
    background-color:rgba(32,163,245,0.3); 
    color: #fff;
}
.login_log .check{

    font-size:24px;
    font-family:58;
    font-weight:400;
    color:rgba(255,255,255,1);
    line-height:13px;
    color: #FFFFFF;
    position: absolute;
    left:93px;top:395px;
}
.login_log a{
   margin-left: 270px;
   color:rgba(255,255,255,1);
}
.login_log .check_box{
    width: 22px;height: 22px; position:  absolute;left:-28px; top:-4px;
}
::-webkit-input-placeholder{
    color:#fff;  
}
</style>