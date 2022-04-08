<template>
    <div class="log-in-container">
        <form class="form" @submit.prevent="handleSubmit">
            <div class="input">
                <label for="user-name">User Name</label>
                <input
                    :class="{ 'error-input': v$.name.$error }"
                    type="text"
                    id="user-name"
                    placeholder="User Name"
                    v-model="v$.name.$model"
                />
                <span class="error" v-if="v$.name.$error">
                    {{ v$.name.$errors[0].$message }}</span
                >
            </div>
            <div class="input">
                <label for="password">Password</label>
                <input
                    :class="{ 'error-input': v$.password.$error }"
                    type="password"
                    id="password"
                    placeholder="Password"
                    v-model="v$.password.$model"
                />
                <span class="error" v-if="v$.password.$error">{{
                    v$.password.$errors[0].$message
                }}</span>
            </div>
            <button type="submit" class="submitButton">Log In</button>
        </form>
        <div class="forgot">
            <div>
                <span>Don't have account yet? </span>
                <span class="question">Register</span>
            </div>
            <div>
                <span>Forgot Password? </span>
                <span class="question">Reset Password</span>
            </div>
        </div>
    </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";

export default {
    name: "LogIn",
    setup() {
        return { v$: useVuelidate() };
    },
    data() {
        return {
            name: "",
            password: "",
            error: false,
        };
    },

    validations() {
        return {
            name: { required, minLength: minLength(3) },
            password: { required, minLength: minLength(6) },
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

<style>
.log-in-container {
    width: 100%;
    height: 80%;

    padding: 1.5rem;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}

.form {
    width: min(100%, 500px);
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.2rem;
}

.input {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
}

.input > label {
    margin-bottom: 0.5rem;
    font-size: clamp(1rem, 1.3vw, 1.4rem);
    align-self: flex-start;
}

.input > input {
    width: min(100%, 500px);
    padding: 0.6em 0.4em;
    border-radius: 5px;
    font-size: clamp(1rem, 1.8vw, 1.4rem);
}

.input > input:focus {
    outline: 5px solid hsl(180, 100%, 25%);
}

.error-input {
    outline: 3px solid crimson;
}

.error {
    color: crimson;
    font-weight: bold;
    font-size: clamp(1rem, 1.3vw, 1.4rem);
    text-align: center;

    position: absolute;
    width: 100%;
    bottom: -1.5rem;
    left: 0;
}

.submitButton {
    margin-top: 1rem;
    width: 8em;
    padding: 0.3em;
    margin-inline: auto;
    font-size: clamp(1.5rem, 2.3vw, 2rem);
    font-family: "Staatliches", cursive;

    color: hsl(0, 0%, 90%);
    border: 2px solid teal;
    border-radius: 10px;
    background-color: transparent;

    cursor: pointer;
}

.submitButton:active {
    background-color: teal;
    box-shadow: 0 0 10px hsl(180, 100%, 35%);
}

.forgot {
    font-size: clamp(0.7rem, 1.6vw, 1rem);
}

.question {
    color: teal;
    cursor: pointer;
}

.question:hover {
    color: hsl(180, 100%, 35%);
}

@media (min-width: 650px) {
    .log-in-container {
        padding: 3rem;
    }
}
</style>