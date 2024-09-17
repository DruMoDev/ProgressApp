export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      exercises: {
        Row: {
          description: string | null
          equipment: string | null
          id: string
          muscle_group: string | null
          name: string
        }
        Insert: {
          description?: string | null
          equipment?: string | null
          id?: string
          muscle_group?: string | null
          name: string
        }
        Update: {
          description?: string | null
          equipment?: string | null
          id?: string
          muscle_group?: string | null
          name?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          activity_level: string
          age: string
          created_at?: string
          email: string
          fitness_goal: string
          gender: string
          height: number
          name: string
          photoURL: string | null
          user_id?: string
          weight: number
        }
        Insert: {
          activity_level: string
          age: string
          created_at?: string
          email: string
          fitness_goal: string
          gender: string
          height: number
          name: string
          photoURL?: string | null
          user_id?: string
          weight: number
        }
        Update: {
          activity_level?: string
          age?: string
          created_at?: string
          email?: string
          fitness_goal?: string
          gender?: string
          height?: number
          name?: string
          photoURL?: string | null
          user_id?: string
          weight?: number
        }
        Relationships: [
          {
            foreignKeyName: "profiles_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      routine_exercises: {
        Row: {
          exercise_id: string | null
          id: string
          reps: number | null
          rest_time: number | null
          routine_id: string | null
          sets: number | null
        }
        Insert: {
          exercise_id?: string | null
          id?: string
          reps?: number | null
          rest_time?: number | null
          routine_id?: string | null
          sets?: number | null
        }
        Update: {
          exercise_id?: string | null
          id?: string
          reps?: number | null
          rest_time?: number | null
          routine_id?: string | null
          sets?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "routine_exercises_exercise_id_fkey"
            columns: ["exercise_id"]
            isOneToOne: false
            referencedRelation: "exercises"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "routine_exercises_routine_id_fkey"
            columns: ["routine_id"]
            isOneToOne: false
            referencedRelation: "routines"
            referencedColumns: ["id"]
          },
        ]
      }
      routines: {
        Row: {
          created_at: string | null
          id: string
          name: string
          profile_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          name: string
          profile_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          name?: string
          profile_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "routines_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
        ]
      }
      session_exercises: {
        Row: {
          id: string
          reps: number | null
          routine_exercise_id: string | null
          session_id: string | null
          sets: number | null
          weight_used: number | null
        }
        Insert: {
          id?: string
          reps?: number | null
          routine_exercise_id?: string | null
          session_id?: string | null
          sets?: number | null
          weight_used?: number | null
        }
        Update: {
          id?: string
          reps?: number | null
          routine_exercise_id?: string | null
          session_id?: string | null
          sets?: number | null
          weight_used?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "session_exercises_routine_exercise_id_fkey"
            columns: ["routine_exercise_id"]
            isOneToOne: false
            referencedRelation: "routine_exercises"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "session_exercises_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "sessions"
            referencedColumns: ["id"]
          },
        ]
      }
      sessions: {
        Row: {
          date: string | null
          duration: number | null
          id: string
          profile_id: string | null
          routine_id: string | null
        }
        Insert: {
          date?: string | null
          duration?: number | null
          id?: string
          profile_id?: string | null
          routine_id?: string | null
        }
        Update: {
          date?: string | null
          duration?: number | null
          id?: string
          profile_id?: string | null
          routine_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "sessions_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "sessions_routine_id_fkey"
            columns: ["routine_id"]
            isOneToOne: false
            referencedRelation: "routines"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
