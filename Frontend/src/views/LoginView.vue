<template>
  <div class="login-wrapper">
    <h2>Control de Acceso</h2>
    <form @submit.prevent="handleLogin">
      <div class="input-group">
        <label>Nombre de Usuario:</label>
        <input type="text" v-model="username" required />
      </div>
      <div class="input-group">
        <label>Contraseña:</label>
        <input type="password" v-model="password" required />
      </div>
      <button type="submit">Autenticar</button>
    </form>
    <p v-if="errorMessage" class="error-text">{{ errorMessage }}</p>
  </div>
</template>
