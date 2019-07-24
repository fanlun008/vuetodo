<template>
  <div class="content">
    <!-- my name is {{$route.params.id}} -->
    <a-form :form="form" @submit="handleSubmit">
      <a-row>
        <a-col :span="12">
          <a-form-item label="Note" :label-col="{ span: 6 }" :wrapper-col="{ span: 12 }">
            <a-input
              v-decorator="[
                'note1',
                {rules: [{ required: true, message: 'Please input your note!' }]}
              ]"
            />
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="Gender" :label-col="{ span: 6 }" :wrapper-col="{ span: 12 }">
            <a-select
              v-decorator="[
                'gender',
                {rules: [{ required: true, message: 'Please select your gender!' }]}
              ]"
              placeholder="Select a option and change input text above"
              @change="handleSelectChange"
            >
              <a-select-option value="male">male</a-select-option>
              <a-select-option value="female">female</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
      </a-row>

      <a-row>
        <a-col :span="12">
          <a-form-item
            :validate-status="userNameError() ? 'error' : ''"
            :help="userNameError() || ''"
          >
            <a-input
              v-decorator="[
                'userName',
                {rules: [{ required: true, message: 'Please input your username!' }]}
              ]"
              placeholder="Username"
            >
              <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
            </a-input>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item
            :validate-status="passwordError() ? 'error' : ''"
            :help="passwordError() || ''"
          >
            <a-input
              v-decorator="[
                'password',
                {rules: [{ required: true, message: 'Please input your Password!' }]}
              ]"
              type="password"
              placeholder="Password"
            >
              <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
            </a-input>
          </a-form-item>
        </a-col>
      </a-row>

      <a-form-item :wrapper-col="{ span: 2, offset: 2 }">
        <a-button type="primary" html-type="submit">Submit</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formLayout: "horizontal",
      form: this.$form.createForm(this)
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
    },
    handleSelectChange(value) {
      console.log(value);
      this.form.setFieldsValue({
        note1: `Hi, ${value === "male" ? "man" : "lady"}!`
      });
    }
  }
};
</script>

<style>
.content {
  position: relative;
  width: 100%;
  margin: 0 auto;
}
</style>