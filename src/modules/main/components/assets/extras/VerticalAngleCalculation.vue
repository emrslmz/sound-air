<template>
  <div class="container pt-2">
    <h1><b>You can calculate the vertical angle here.</b></h1>
    <p class="text-spacing5">Easily. {{ this.angles.verticalAngle1 }}</p>
    <table class="table table-striped">
      <thead>
      <tr class="text-center">
        <th>DN</th>
        <th>BN</th>
        <th>Silsile NO</th>
        <th>Durbun NO</th>
        <th>Dusey Aci</th>
        <th>Gosterge Duzeltme Miktari ( δ )</th>
        <th>Zenit (Z)</th>
        <th>Ortalama Zenit</th>
      </tr>
      </thead>
      <tbody>

      <tr class="text-center">
        <th><input class="calculate-input form-control" v-model="binocularPoint" type="text" placeholder="DN"></th>
        <th><input class="calculate-input form-control" v-model="lookingPoint" type="text" placeholder="BN"></th>
        <td>1</td>
        <td>I.</td>
        <th><input class="calculate-input-number form-control" v-model="angles.verticalAngle1" type="number" placeholder="Vertical angle1"></th>
        <th><input class="calculate-input-number form-control" v-model="correctionAmounts.correction1" type="number" placeholder="duzeltme mik1"></th>
        <td>duzeltilmis1</td>
        <td>{{ averageZenith1 }}</td>
      </tr>

      <tr class="text-center">
        <th></th>
        <th></th>
        <td></td>
        <td>II.</td>
        <th><input class="calculate-input-number form-control" v-model="angles.verticalAngle2" type="number" placeholder="Vertical angle2"></th>
        <th><input class="calculate-input-number form-control" v-model="correctionAmounts.correction2" type="number" placeholder="duzeltme mik2"></th>
        <td>duzeltilmis2</td>
        <td></td>
      </tr>

      <tr class="text-center">
        <th></th>
        <th></th>
        <td></td>
        <td>-400farki</td>
        <th>{{ toplami(angles.verticalAngle1, angles.verticalAngle2) }}</th>
        <th></th>
        <td></td>
        <td></td>
      </tr>


      <tr class="text-center">
        <th></th>
        <th></th>
        <td>2</td>
        <td>I.</td>
        <th><input class="calculate-input-number form-control" v-model="angles.verticalAngle3" type="number" placeholder="Vertical angle3"></th>
        <th><input class="calculate-input-number form-control" type="number" v-model="correctionAmounts.correction3" placeholder="duzeltme3"></th>
        <td>duzeltilmis3</td>
        <td></td>
      </tr>

      <tr class="text-center">
        <th></th>
        <th></th>
        <td></td>
        <td>II.</td>
        <th><input class="calculate-input-number form-control" v-model="angles.verticalAngle4" type="number" placeholder="Vertical angle4"></th>
        <th><input class="calculate-input-number form-control" type="number" v-model="correctionAmounts.correction4" placeholder="duzeltme4"></th>
        <td>duzeltilmis4</td>
        <td></td>
      </tr>

      <tr class="text-center">
        <th></th>
        <th></th>
        <td></td>
        <td>-400farki</td>
        <th>toplami</th>
        <th></th>
        <td></td>
        <td></td>
      </tr>

      <tr class="text-center">
        <th></th>
        <th></th>
        <td></td>
        <td></td>
        <th></th>
        <th></th>
        <td></td>
        <td></td>
      </tr>



<!--2.SECTION-->

      <tr class="text-center">
        <th><input class="calculate-input form-control" type="text" v-model="lookingPoint" placeholder="BN"></th>
        <th><input class="calculate-input form-control" v-model="this.binocularPoint" type="text" placeholder="DN"></th>
        <td>1</td>
        <td>I.</td>
        <th><input class="calculate-input-number form-control" type="number" v-model="angles.verticalAngle5" placeholder="Vertical angle5"></th>
        <th><input class="calculate-input-number form-control" type="number" v-model="correctionAmounts.correction5" placeholder="duzeltme5"></th>
        <td>duzeltilmis5</td>
        <td>{{ averageZenith1 }}</td>
      </tr>

      <tr class="text-center">
        <th></th>
        <th></th>
        <td></td>
        <td>II.</td>
        <th><input class="calculate-input-number form-control" type="number" v-model="angles.verticalAngle6" placeholder="Vertical angle6"></th>
        <th><input class="calculate-input-number form-control" type="number" v-model="correctionAmounts.correction6" placeholder="duzeltme6"></th>
        <td>duzeltilmis6</td>
        <td></td>
      </tr>



      <tr class="text-center pt-2">
        <th></th>
        <th></th>
        <td></td>
        <td>-400farki</td>
        <th>toplami</th>
        <th></th>
        <td></td>
        <td></td>
      </tr>


      <tr class="text-center">
        <th></th>
        <th></th>
        <td>2</td>
        <td>I.</td>
        <th><input class="calculate-input-number form-control" type="number" v-model="angles.verticalAngle7" placeholder="Vertical angle7"></th>
        <th><input class="calculate-input-number form-control" type="number" v-model="correctionAmounts.correction7" placeholder="duzeltme7"></th>
        <td>duzeltilmis7</td>
        <td></td>
      </tr>

      <tr class="text-center">
        <th></th>
        <th></th>
        <td></td>
        <td>II.</td>
        <th><input class="calculate-input-number form-control" type="number" v-model="angles.verticalAngle8" placeholder="Vertical angle8"></th>
        <th><input class="calculate-input-number form-control" type="number" v-model="correctionAmounts.correction8" placeholder="duzeltme8"></th>
        <td>duzeltilmis8</td>
        <td></td>
      </tr>

      <tr class="text-center">
        <th></th>
        <th></th>
        <td></td>
        <td>-400farki</td>
        <th>toplami</th>
        <th></th>
        <td></td>
        <td></td>
      </tr>



      </tbody>
    </table>

    <div>
      <p> Durbun noktası: {{ binocularPoint }}</p>
      <p>bakılan nokta: {{ lookingPoint }}</p>
      <p><b>Açılar</b>
      <p>açı1: {{ angles.verticalAngle1}}</p>
      <p>açı2: {{ angles.verticalAngle2}}</p>
      <p>açı3: {{ angles.verticalAngle3}}</p>
      <p>açı4: {{ angles.verticalAngle4}}</p>
      <p>açı5: {{ angles.verticalAngle5}}</p>
      <p>açı6: {{ angles.verticalAngle6}}</p>
      <p>açı7: {{ angles.verticalAngle7}}</p>
      <p>açı8: {{ angles.verticalAngle8}}</p>
      <p>duzeltme1: {{ correctionAmounts.correction1}}</p>
      <p>duzeltme2: {{ correctionAmounts.correction2}}</p>
      <p>duzeltme3: {{ correctionAmounts.correction3}}</p>
      <p>duzeltme4: {{ correctionAmounts.correction4}}</p>
      <p>duzeltme5: {{ correctionAmounts.correction5}}</p>
      <p>duzeltme6: {{ correctionAmounts.correction6}}</p>
      <p>duzeltme7: {{ correctionAmounts.correction7}}</p>
      <p>duzeltme8: {{ correctionAmounts.correction8}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ForLessonVerticalAngle',
  data() {
    return {
      binocularPoint: 'dasdsa',
      lookingPoint: '',
      angles: {
        verticalAngle1: null,
        verticalAngle2: null,
        verticalAngle3: null,
        verticalAngle4: null,
        verticalAngle5: null,
        verticalAngle6: null,
        verticalAngle7: null,
        verticalAngle8: null,
      },
      correctionAmounts: {
        correction1: null,
        correction2: null,
        correction3: null,
        correction4: null,
        correction5: null,
        correction6: null,
        correction7: null,
        correction8: null,
      },
      averageZenith1: null,
      averageZenith2: null,
    };
  },
  methods: {
    toplami(aci1, aci2) {
      return aci2 + aci1;
    }
  }
};
</script>

<style scoped>
.container {
  min-height: 120vh;
}

.calculate-input {
  border-bottom: 1px solid black;
  width: 50px;
  background-color: transparent;
}

.calculate-input-number {
  border-bottom: 1px solid black;
  background-color: transparent;
}
</style>
