import { Builder } from '@builder.io/react'
import PropertyHeader from './src/components/property/property-single-style/single-v2/PropertyHeader'
import PropertyGallery from './src/components/property/property-single-style/single-v2/PropertyGallery'
import OverView from './src/components/property/property-single-style/single-v2/OverView'
import ContactWithAgent from './src/components/property/property-single-style/single-v2/ContactWithAgent'
import ScheduleForm from './src/components/property/property-single-style/single-v2/ScheduleForm'

// Register your components with Builder.io
Builder.registerComponent(PropertyHeader, {
  name: 'Property Header',
  inputs: [
    {
      name: 'id',
      type: 'string',
      defaultValue: '1'
    }
  ]
})

Builder.registerComponent(PropertyGallery, {
  name: 'Property Gallery',
  inputs: [
    {
      name: 'id',
      type: 'string',
      defaultValue: '1'
    }
  ]
})

Builder.registerComponent(OverView, {
  name: 'Property Overview',
  inputs: [
    {
      name: 'id',
      type: 'string',
      defaultValue: '1'
    }
  ]
})

Builder.registerComponent(ContactWithAgent, {
  name: 'Contact Agent',
  inputs: [
    {
      name: 'id',
      type: 'string',
      defaultValue: '1'
    }
  ]
})

Builder.registerComponent(ScheduleForm, {
  name: 'Schedule Form',
  inputs: [
    {
      name: 'id',
      type: 'string',
      defaultValue: '1'
    }
  ]
})
