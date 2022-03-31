<template>
    <div class="all-logs">
        <all-logs-component></all-logs-component>
    </div>
</template>

<script>
import AllLogsComponent from '@/components/AllLogsComponent'

export default {
  name: 'all-view',
  components: { AllLogsComponent },
  mounted () {
    if (!localStorage.getItem('token')) {
      window.location.href = '#/login'
    }
  }
}
</script>

<style lang="scss" scoped>
    .all-logs{
        width: 100%;
        border-radius: 20px;
        margin-top: 8px;
        padding: 2px 20px;
        height: calc(100% - 10px);
    }
</style>
