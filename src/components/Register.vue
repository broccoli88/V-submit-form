<template>
    <div class="log-in-container">
        <form class="form">
            <div class="input">
                <label for="user-name">User Name</label>
                <input type="text" id="user-name" placeholder="User Name" />
            </div>
            <div class="input">
                <label for="email">Email</label>
                <input type="email" id="email" placeholder="Email" />
            </div>
            <div class="input">
                <label for="password">Password</label>
                <input type="password" id="password" placeholder="Password" />
            </div>
            <div class="input">
                <label for="confirm_password">Confirm Password</label>
                <input
                    type="password"
                    id="confirm_password"
                    placeholder="Confirm Password"
                />
            </div>
            <button type="submit" class="submitButton">Register</button>
        </form>
    </div>
</template>

<script >
export default {
    name: "Register",
};
</script>

<style scoped>
.input > input {
    padding: 0.4em 0.4em;
    font-size: clamp(1rem, 1.8vw, 1.2rem);
}
</style>