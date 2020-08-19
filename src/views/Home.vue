<template>
  <div class="home">
    <DataBar></DataBar><br>
    <DataTable></DataTable>
  </div>
</template>

<script>
// @ is an alias to /src
import DataBar from '@/components/DataBar'
import DataTable from '@/components/DataTable'

export default {
  name: 'Home',
  components: {
    DataBar,
    DataTable
  }
}
</script>
<style  scoped>
  .home{
        background: radial-gradient(black, transparent);
  }
</style>