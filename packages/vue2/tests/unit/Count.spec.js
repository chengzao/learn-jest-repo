import { shallowMount } from '@vue/test-utils'
import Count from '@/components/Count.vue'

describe('tests Count.vue', () => {
  it('call increment & decrement', () => {
    const wrapper = shallowMount(Count)
    expect(wrapper.vm.count).toBe(0)
    wrapper.vm.increment()
    expect(wrapper.vm.count).toBe(1)
    wrapper.vm.decrement()
    expect(wrapper.vm.count).toBe(0)
  })
})