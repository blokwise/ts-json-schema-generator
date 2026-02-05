export interface Fish {
  animal_type: 'fish'
  found_in: 'ocean' | 'river'
}

export interface Bird {
  animal_type: 'bird'
  can_fly: boolean
  likes_to_eat: Animal
}

/**
 * @discriminator animal_type
 */
export type Animal = Bird | Fish
