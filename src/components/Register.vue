<template>
    <div class="log-in-container">
        <form class="form" @submit.prevent="handleSubmit">
            <div class="input">
                <label for="user-name">User Name</label>
                <input
                    :class="{ 'error-input': v$.name.$error }"
                    v-model="v$.name.$model"
                    type="text"
                    id="user-name"
                    placeholder="User Name"
                />
                <span class="error" v-if="v$.name.$error">
                    {{ v$.name.$errors[0].$message }}</span
                >
            </div>
            <div class="input">
                <label for="email">Email</label>
                <input
                    :class="{ 'error-input': v$.email.$error }"
                    v-model="v$.email.$model"
                    type="email"
                    id="email"
                    placeholder="Email"
                />
                <span class="error" v-if="v$.email.$error">
                    {{ v$.email.$errors[0].$message }}</span
                >
            </div>
            <div class="input">
                <label for="password">Password</label>
                <input
                    :class="{ 'error-input': v$.password.password.$error }"
                    v-model="v$.password.password.$model"
                    type="password"
                    id="password"
                    placeholder="Password"
                />
                <span class="error" v-if="v$.password.password.$error">
                    {{ v$.password.password.$errors[0].$message }}</span
                >
            </div>
            <div class="input">
                <label for="confirm_password">Confirm Password</label>
                <input
                    :class="{ 'error-input': v$.password.confirm.$error }"
                    v-model="v$.password.confirm.$model"
                    type="password"
                    id="confirm_password"
                    placeholder="Confirm Password"
                />
                <span class="error" v-if="v$.password.confirm.$error">
                    {{ v$.password.confirm.$errors[0].$message }}</span
                >
            </div>
            <button type="submit" class="submitButton">Register</button>
        </form>
    </div>
</template>

<script >
import useVuelidate from "@vuelidate/core";
import { required, minLength, email } from "@vuelidate/validators";

export default {
    name: "Register",
    data() {
        return {
            v$: useVuelidate(),
            name: "",
            email: "",
            password: {
                password: "",
                confirm: "",
            },
        };
    },

    validations() {
        return {
            name: { required, minLength: minLength(3) },
            email: { required, email },
            password: {
                password: { required, minLength: minLength(6) },
                confirm: { required, minLength: minLength(6) },
            },
        };
    },

    methods: {
        async handleSubmit() {
            const isFormCorrect = await this.v$.$validate();

            setTimeout(() => {
                this.v$.$reset();
            }, 2000);
        },
    },
};
</script>

<style scoped>
.input > input {
    padding: 0.4em 0.4em;
    font-size: clamp(1rem, 1.8vw, 1.2rem);
}
</style>