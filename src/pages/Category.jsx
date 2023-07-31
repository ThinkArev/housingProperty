import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { collection, getDocs, query, where, orderBy, limit, setAfter } from 'firebase/firestore'

import { db } from '../firebase.config'
import { toast } from 'react-toastify'
import Spinner from '../components/Spinner'
import Listingitem from '../components/Listingitem'

const Category = () => {
    const [listings, setListings] = useState(null)
    const [loading, setLoading] = useState(true)

    const params = useParams()
    console.log(params)

    useEffect(() => {
        const fetchListings = async () => {
            try {
                //Get reference
                const listingsRef = collection(db, 'listings')

                //create a query
                const q = query(listingsRef, where('type', '==', params.categoryName), orderBy('timestamp', 'desc'),
                    limit(10))
                // Execute query
                const querySnap = await getDocs(q)
                let listings = []
                querySnap.forEach((doc) => {
                    console.log('query Data ' ,doc)
                    return listings.push({
                        id: doc.id,
                        data: doc.data()
                    })
                    console.log(doc.data())
                })
                setListings(listings)
                setLoading(false)
            }
            catch (error) {
                toast.errro('çould not fetch listings')
            }
        }

        fetchListings()

    }, [])
    return (
        <div className='category'>
            <header>
                <p className='pageHeader'>
                    {params.categoryName === 'rent' ? 'Places for rent' : 'Places for sale'}

                </p>
            </header>

            {
                loading ? <Spinner /> : listings && listings.length > 0 ? (
                    <>
                        <main>
                            <ul className="categoryListings">
                                {listings.map((listing)=>(
                                <Listingitem listing={listing.data}
                                    id={listing.id}
                                key={listing.id} />
                           )     )}
                     </ul>
                        </main>
                    </>
                ) :''
            } 
        </div>
    )
}

export default Category
