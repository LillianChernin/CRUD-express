const muscles = [
  {
    id: 1,
    name: 'trapezius',
    origins: [
      'external occipital protuberance',
      'superior nuchal line',
      'nuchal ligament',
      'spinous processes of C7-T12',
      'supraspinous ligament of C7-T12'
    ],
    insertions: [
      'lateral third of the clavicle',
      'acromion process',
      'scapular spine'
    ],
    actions: [
      'extends the neck and head (upper fibers)',
      'elevates the scapula (upper fibers)',
      'upwardly rotates the scapula (upper fibers)',
      'retracts the scapula (middle fibers)',
      'depresses the scapula (lower fibers)',
      'laterally flexes the neck (unilateral contraction)',
      'rotates the head (unilateral contraction)',
      'stabilizes the scapula'
    ],
    nerves: [
      'spinal accessory nerve (cranial nerve XI)',
      'midcervical nerves'
    ],
    image: '/static/images/trapezius.jpeg'
  },
  {
    id: 2,
    name: 'levator scapulae',
    origins: [
      'transverse processes of C1-C4'
    ],
    insertions: [
      'medial border of the scapula (superior angle to root of spine)'
    ],
    actions: [
      'elevates the scapula',
      'downwardly rotates the scapula',
      'laterally flexes the neck',
      'stabilizes the scapula'
    ],
    nerves: [
      'dorsal scapular nerve',
      'midcervical nerves'
    ],
    image: '/static/images/levator scapulae.jpeg'
  },
  {
    id: 3,
    name: 'rhomboids major and minor',
    origins: [
      'spinous processes of C7-T1 (minor)',
      'spinous processes of T2-T5 (major)'
    ],
    insertions: [
      'medial border of the scapula from the superior angle to the root of the scapular spine (minor)',
      'medial border of the scapula from the root of the scapular spine to the inferior angle (major)'
    ],
    actions: [
      'retracts the scapula',
      'downwardly rotates the scapula',
      'stabilizes the scapula'
    ],
    nerves: [
      'dorsal scapular nerve'
    ],
    image: '/static/images/rhomboid major.png'
  },
  {
    id: 4,
    name: 'pectoralis minor',
    origins: [
      'ribs 3 through 5 (lateral to costal cartilage)'
    ],
    insertions: [
      'coracoid process of the scapula'
    ],
    actions: [
      'depresses the scapula',
      'protracts the scapula',
      'downwardly rotates the scapula'
    ],
    nerves: [
      'medial pectoral nerves (C8 and T1)'
    ],
    image: '/static/images/pectoralis minor.png'
  },
  {
    id: 5,
    name: 'latissimus dorsi',
    origins: [
      'spinous processes of T7-L5',
      'ribs 9 through 12 (posterior surface)',
      'posterior iliac crest',
      'posterior sacrum'
    ],
    insertions: [
      'intertubercular groove of the humerus (medial lip)'
    ],
    actions: [
      'extends the humerus',
      'medially rotates the humerus',
      'adducts the humerus'
    ],
    nerves: [
      'thoracodorsal nerve'
    ],
    image: '/static/images/latissimus dorsi.png'
  },
  {
    id: 6,
    name: 'teres minor',
    origins: [
      'inferior third of the lateral border of the scapula'
    ],
    insertions: [
      'intertubercular groove of the humerus (medial lip)'
    ],
    actions: [
      'extends the humerus',
      'medially rotates the humerus',
      'adducts the humerus'
    ],
    nerves: [
      'lower subscapular nerve'
    ],
    image: '/static/images/teres minor.png'
  },
  {
    id: 7,
    name: 'deltoid',
    origins: [
      'lateral third of the clavicle',
      'acromion process',
      'scapular spine'
    ],
    insertions: [
      'deltoid tuberosity'
    ],
    actions: [
      'flexes the humerus (anterior fibers)',
      'medially rotates the humerus (anterior fibers)',
      'abducts the humerus (middle fibers)',
      'extends the humerus (posterior fibers)',
      'laterally rotates the humerus (posterior fibers)'
    ],
    nerves: [
      'axillary nerve'
    ],
    image: '/static/images/deltoid.png'
  },
  {
    id: 8,
    name: 'pectoralis major',
    origins: [
      'medial half of the clavicle',
      'edge of the sternal body',
      'ribs 1 through 7 (costal cartilages)'
    ],
    insertions: [
      'intertubercular groove of the humerus (lateral lip)'
    ],
    actions: [
      'adducts the humerus',
      'medially rotates the humerus',
      'flexes the humerus',
      'extends the humerus'
    ],
    nerves: [
      'medial and lateral pectoral nerves'
    ],
    image: '/static/images/pectoralis major.png'
  },
  {
    id: 9,
    name: 'biceps brachii',
    origins: [
      'supraglenoid tubercle of the scapula (long head)',
      'coracoid process of the scapula (short head)'
    ],
    insertions: [
      'radial tuberosity',
      'bicipital aponeurosis'
    ],
    actions: [
      'flexes the elbow',
      'supinates the forearm',
      'flexes the humerus'
    ],
    nerves: [
      'musculocutaneous nerve'
    ],
    image: '/static/images/biceps brachii.png'
  }
]

module.exports = muscles;
