import React from 'react'

export const handleInputChange = <T extends Record<string, unknown>>(setForm: React.Dispatch<React.SetStateAction<T>>) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    const checked = (e.target as HTMLInputElement).checked

    setForm(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
    }))
}