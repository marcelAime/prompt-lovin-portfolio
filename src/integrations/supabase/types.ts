export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      abonnements: {
        Row: {
          created_at: string
          date_debut: string
          date_fin: string
          id: string
          payment_reference: string | null
          paystack_reference: string | null
          prix: number
          statut: string
          type_abonnement: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          date_debut: string
          date_fin: string
          id?: string
          payment_reference?: string | null
          paystack_reference?: string | null
          prix: number
          statut?: string
          type_abonnement: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          date_debut?: string
          date_fin?: string
          id?: string
          payment_reference?: string | null
          paystack_reference?: string | null
          prix?: number
          statut?: string
          type_abonnement?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      annonces_logements: {
        Row: {
          adresse: string
          commodites: string[] | null
          created_at: string
          date_disponibilite: string | null
          description: string | null
          disponible: boolean | null
          id: string
          latitude: number | null
          longitude: number | null
          meuble: boolean | null
          nombre_chambres: number | null
          nombre_salles_bain: number | null
          photos: string[] | null
          prix_mensuel: number
          quartier: string
          superficie: number | null
          titre: string
          type_logement: string
          updated_at: string
          user_id: string
          verified: boolean | null
          video_url: string | null
          ville: string
        }
        Insert: {
          adresse: string
          commodites?: string[] | null
          created_at?: string
          date_disponibilite?: string | null
          description?: string | null
          disponible?: boolean | null
          id?: string
          latitude?: number | null
          longitude?: number | null
          meuble?: boolean | null
          nombre_chambres?: number | null
          nombre_salles_bain?: number | null
          photos?: string[] | null
          prix_mensuel: number
          quartier: string
          superficie?: number | null
          titre: string
          type_logement: string
          updated_at?: string
          user_id: string
          verified?: boolean | null
          video_url?: string | null
          ville?: string
        }
        Update: {
          adresse?: string
          commodites?: string[] | null
          created_at?: string
          date_disponibilite?: string | null
          description?: string | null
          disponible?: boolean | null
          id?: string
          latitude?: number | null
          longitude?: number | null
          meuble?: boolean | null
          nombre_chambres?: number | null
          nombre_salles_bain?: number | null
          photos?: string[] | null
          prix_mensuel?: number
          quartier?: string
          superficie?: number | null
          titre?: string
          type_logement?: string
          updated_at?: string
          user_id?: string
          verified?: boolean | null
          video_url?: string | null
          ville?: string
        }
        Relationships: []
      }
      chambres: {
        Row: {
          capacite: number
          created_at: string
          description: string | null
          disponible: boolean | null
          equipements: string[] | null
          hotel_id: string
          id: string
          nom: string
          photo: string | null
          prix_par_nuit: number
          superficie: number | null
          type_chambre: string
          updated_at: string
        }
        Insert: {
          capacite?: number
          created_at?: string
          description?: string | null
          disponible?: boolean | null
          equipements?: string[] | null
          hotel_id: string
          id?: string
          nom: string
          photo?: string | null
          prix_par_nuit: number
          superficie?: number | null
          type_chambre: string
          updated_at?: string
        }
        Update: {
          capacite?: number
          created_at?: string
          description?: string | null
          disponible?: boolean | null
          equipements?: string[] | null
          hotel_id?: string
          id?: string
          nom?: string
          photo?: string | null
          prix_par_nuit?: number
          superficie?: number | null
          type_chambre?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "chambres_hotel_id_fkey"
            columns: ["hotel_id"]
            isOneToOne: false
            referencedRelation: "hotels"
            referencedColumns: ["id"]
          },
        ]
      }
      conversations: {
        Row: {
          annonce_id: string | null
          created_at: string
          id: string
          last_message_at: string | null
          locataire_id: string
          proprietaire_id: string
        }
        Insert: {
          annonce_id?: string | null
          created_at?: string
          id?: string
          last_message_at?: string | null
          locataire_id: string
          proprietaire_id: string
        }
        Update: {
          annonce_id?: string | null
          created_at?: string
          id?: string
          last_message_at?: string | null
          locataire_id?: string
          proprietaire_id?: string
        }
        Relationships: []
      }
      hotels: {
        Row: {
          adresse: string
          created_at: string
          description: string | null
          email: string | null
          id: string
          latitude: number | null
          longitude: number | null
          nom: string
          nombre_avis: number | null
          nombre_etoiles: number | null
          note_moyenne: number | null
          photo_principale: string | null
          photos: string[] | null
          quartier: string | null
          services: string[] | null
          telephone: string | null
          updated_at: string
          user_id: string
          verified: boolean | null
          ville: string
          whatsapp: string | null
        }
        Insert: {
          adresse: string
          created_at?: string
          description?: string | null
          email?: string | null
          id?: string
          latitude?: number | null
          longitude?: number | null
          nom: string
          nombre_avis?: number | null
          nombre_etoiles?: number | null
          note_moyenne?: number | null
          photo_principale?: string | null
          photos?: string[] | null
          quartier?: string | null
          services?: string[] | null
          telephone?: string | null
          updated_at?: string
          user_id: string
          verified?: boolean | null
          ville?: string
          whatsapp?: string | null
        }
        Update: {
          adresse?: string
          created_at?: string
          description?: string | null
          email?: string | null
          id?: string
          latitude?: number | null
          longitude?: number | null
          nom?: string
          nombre_avis?: number | null
          nombre_etoiles?: number | null
          note_moyenne?: number | null
          photo_principale?: string | null
          photos?: string[] | null
          quartier?: string | null
          services?: string[] | null
          telephone?: string | null
          updated_at?: string
          user_id?: string
          verified?: boolean | null
          ville?: string
          whatsapp?: string | null
        }
        Relationships: []
      }
      inscriptions: {
        Row: {
          created_at: string
          email: string | null
          eventbrite_id: string | null
          id: string
          nom: string
          prenom: string
          status: string | null
          telephone: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          email?: string | null
          eventbrite_id?: string | null
          id?: string
          nom: string
          prenom: string
          status?: string | null
          telephone: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          email?: string | null
          eventbrite_id?: string | null
          id?: string
          nom?: string
          prenom?: string
          status?: string | null
          telephone?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      menus: {
        Row: {
          allergenes: string[] | null
          categorie: string
          created_at: string
          description: string | null
          disponible: boolean | null
          id: string
          nom: string
          photo: string | null
          prix: number
          restaurant_id: string
          updated_at: string
        }
        Insert: {
          allergenes?: string[] | null
          categorie: string
          created_at?: string
          description?: string | null
          disponible?: boolean | null
          id?: string
          nom: string
          photo?: string | null
          prix: number
          restaurant_id: string
          updated_at?: string
        }
        Update: {
          allergenes?: string[] | null
          categorie?: string
          created_at?: string
          description?: string | null
          disponible?: boolean | null
          id?: string
          nom?: string
          photo?: string | null
          prix?: number
          restaurant_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "menus_restaurant_id_fkey"
            columns: ["restaurant_id"]
            isOneToOne: false
            referencedRelation: "restaurants"
            referencedColumns: ["id"]
          },
        ]
      }
      messages: {
        Row: {
          conversation_id: string
          created_at: string
          file_url: string | null
          id: string
          lu: boolean | null
          message: string
          message_type: string | null
          receiver_id: string
          sender_id: string
        }
        Insert: {
          conversation_id: string
          created_at?: string
          file_url?: string | null
          id?: string
          lu?: boolean | null
          message: string
          message_type?: string | null
          receiver_id: string
          sender_id: string
        }
        Update: {
          conversation_id?: string
          created_at?: string
          file_url?: string | null
          id?: string
          lu?: boolean | null
          message?: string
          message_type?: string | null
          receiver_id?: string
          sender_id?: string
        }
        Relationships: []
      }
      notification_tokens: {
        Row: {
          active: boolean | null
          created_at: string
          device_type: string | null
          id: string
          token: string
          user_id: string
        }
        Insert: {
          active?: boolean | null
          created_at?: string
          device_type?: string | null
          id?: string
          token: string
          user_id: string
        }
        Update: {
          active?: boolean | null
          created_at?: string
          device_type?: string | null
          id?: string
          token?: string
          user_id?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string
          id: string
          nom: string | null
          prenom: string | null
          role: string
          telephone: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          nom?: string | null
          prenom?: string | null
          role?: string
          telephone?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          nom?: string | null
          prenom?: string | null
          role?: string
          telephone?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      profils_services: {
        Row: {
          created_at: string
          description: string | null
          disponibilite: string | null
          experience: string | null
          id: string
          nom: string
          photo_identite: string | null
          prenom: string
          quartier: string | null
          tarif_journalier: number | null
          telephone: string
          type_service: string
          updated_at: string
          user_id: string
          verified: boolean | null
          ville: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          disponibilite?: string | null
          experience?: string | null
          id?: string
          nom: string
          photo_identite?: string | null
          prenom: string
          quartier?: string | null
          tarif_journalier?: number | null
          telephone: string
          type_service: string
          updated_at?: string
          user_id: string
          verified?: boolean | null
          ville?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          disponibilite?: string | null
          experience?: string | null
          id?: string
          nom?: string
          photo_identite?: string | null
          prenom?: string
          quartier?: string | null
          tarif_journalier?: number | null
          telephone?: string
          type_service?: string
          updated_at?: string
          user_id?: string
          verified?: boolean | null
          ville?: string
        }
        Relationships: []
      }
      restaurants: {
        Row: {
          adresse: string
          created_at: string
          description: string | null
          email: string | null
          gamme_prix: string | null
          horaires_ouverture: Json | null
          id: string
          latitude: number | null
          longitude: number | null
          nom: string
          nombre_avis: number | null
          note_moyenne: number | null
          photo_principale: string | null
          photos: string[] | null
          quartier: string | null
          telephone: string | null
          type_cuisine: string[] | null
          updated_at: string
          user_id: string
          verified: boolean | null
          ville: string
          whatsapp: string | null
        }
        Insert: {
          adresse: string
          created_at?: string
          description?: string | null
          email?: string | null
          gamme_prix?: string | null
          horaires_ouverture?: Json | null
          id?: string
          latitude?: number | null
          longitude?: number | null
          nom: string
          nombre_avis?: number | null
          note_moyenne?: number | null
          photo_principale?: string | null
          photos?: string[] | null
          quartier?: string | null
          telephone?: string | null
          type_cuisine?: string[] | null
          updated_at?: string
          user_id: string
          verified?: boolean | null
          ville?: string
          whatsapp?: string | null
        }
        Update: {
          adresse?: string
          created_at?: string
          description?: string | null
          email?: string | null
          gamme_prix?: string | null
          horaires_ouverture?: Json | null
          id?: string
          latitude?: number | null
          longitude?: number | null
          nom?: string
          nombre_avis?: number | null
          note_moyenne?: number | null
          photo_principale?: string | null
          photos?: string[] | null
          quartier?: string | null
          telephone?: string | null
          type_cuisine?: string[] | null
          updated_at?: string
          user_id?: string
          verified?: boolean | null
          ville?: string
          whatsapp?: string | null
        }
        Relationships: []
      }
      service_contact_access_log: {
        Row: {
          access_type: string
          accessed_at: string | null
          accessed_by: string | null
          id: string
          service_provider_id: string
        }
        Insert: {
          access_type: string
          accessed_at?: string | null
          accessed_by?: string | null
          id?: string
          service_provider_id: string
        }
        Update: {
          access_type?: string
          accessed_at?: string | null
          accessed_by?: string | null
          id?: string
          service_provider_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      profils_services_public: {
        Row: {
          created_at: string | null
          description: string | null
          disponibilite: string | null
          experience: string | null
          id: string | null
          nom: string | null
          prenom: string | null
          quartier: string | null
          statut_verification: string | null
          tarif_journalier: number | null
          type_service: string | null
          updated_at: string | null
          verified: boolean | null
          ville: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          disponibilite?: string | null
          experience?: string | null
          id?: string | null
          nom?: string | null
          prenom?: string | null
          quartier?: string | null
          statut_verification?: never
          tarif_journalier?: number | null
          type_service?: string | null
          updated_at?: string | null
          verified?: boolean | null
          ville?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          disponibilite?: string | null
          experience?: string | null
          id?: string | null
          nom?: string | null
          prenom?: string | null
          quartier?: string | null
          statut_verification?: never
          tarif_journalier?: number | null
          type_service?: string | null
          updated_at?: string | null
          verified?: boolean | null
          ville?: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      get_service_provider_contact: {
        Args: { provider_id: string }
        Returns: {
          photo_identite: string
          telephone: string
        }[]
      }
      has_active_subscription: { Args: { user_id?: string }; Returns: boolean }
      is_admin: { Args: { user_id?: string }; Returns: boolean }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
